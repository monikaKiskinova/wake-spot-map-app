import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router'
import { useContext } from 'react';

import './ParkDetails.css'

import { usePark, useDeletePark } from '../../api/wakeparkApi';
import { UserContext } from '../../contexts/UserContext';
import { useComments, useCreateComment } from '../../api/commentsApi';
import CommentItem from './comments-item/CommentItem';

export default function ParkDetails() {
    const navigate = useNavigate();
    const { parkId } = useParams();
    const { park } = usePark(parkId);
    const { deletePark } = useDeletePark();
    const { _id: userId, username } = useContext(UserContext);
    const { comments, setComments } = useComments(parkId);
    const { createComment } = useCreateComment();

    const isOwner = park._ownerId === userId;

    const formAction = async (formData) => {
        const commentData = Object.fromEntries(formData);
        const comment = await createComment(parkId, username, commentData.comment);

        if (!comment) {
            return;
        }

        setComments(state => [...state, comment])
    }

    const deleteParkClickHandler = async () => {
        const hasDeleteConfirm = confirm(`Are you sure you want to delete ${park.name}?`);

        if (!hasDeleteConfirm) {
            return;
        }

        await deletePark(parkId);
        navigate('/wakeparks');
    }

    return (
        <div className="outer-container">
            <div className="details-container">
                <div className="images-container">
                    <div className="main-img-container">
                        <img src={park.mainImageUrl} alt="" width="450px" />
                    </div>
                    <div className="small-images-container">
                        <img src="/images/article-img.jpg" alt="" width="220px" />
                        <img src="/images/article-img.jpg" alt="" width="220px" />
                        <img src="/images/article-img.jpg" alt="" width="220px" />
                    </div>
                </div>
                <div className="park-details-container">
                    <div className="info-container">
                        <h2>{park.name}</h2>
                        <p className="location">{park.country}</p>
                        <p className="address">{park.address}</p>
                        <p className="info">{park.info}</p>
                    </div>

                    {isOwner
                        ?
                        <div className="btn-container">
                            <Link to={`/wakeparks/${parkId}/edit`} className="btn edit-btn">Edit</Link>
                            <button onClick={deleteParkClickHandler} className="btn delete-btn">Delete</button>
                        </div>
                        : null
                    }
                </div>
            </div>
            <div className="comments-container">
                <h3>Comments:</h3>
                <div className="comment-container">

                    {comments.length > 0
                        ? comments.map(comment => <CommentItem key={comment._id} {...comment} />)
                        : <h2 className="no-comments" style={{ padding: "1em", textAlign: "center", fontSize: "1.8em" }}>No comments yet.</h2>
                    }

                </div>

                {username
                    ?
                    <div className="comment-form-container">
                        <form className="comments-form" action={formAction}>
                            <label htmlFor="comment">Comments about the park:</label>
                            <textarea id="comment" name="comment" rows="2" cols="100" placeholder="Write your comment here..."></textarea>
                            <input type="submit" className="btn comment-btn" defaultValue="Add a comment" />
                        </form>
                    </div>
                    : null
                }

            </div>
        </div>
    );
};