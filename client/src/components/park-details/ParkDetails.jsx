import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router'

import './ParkDetails.css'

import { usePark, useDeletePark } from '../../api/wakeparkApi';

export default function ParkDetails() {
    const navigate = useNavigate();
    const {parkId} = useParams(); 
    const {park} = usePark(parkId);
    const { deletePark } = useDeletePark();

    const deleteParkClickHandler = async () => {
        const hasDeleteConfirm = confirm(`Are you sure you want to delete ${park.name}?`);

        if(!hasDeleteConfirm) {
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
                    <div className="btn-container">
                        <Link to={`/wakeparks/${parkId}/edit`} className="btn edit-btn">Edit</Link>
                        <button onClick={deleteParkClickHandler} className="btn delete-btn">Delete</button>
                    </div>
                </div>
            </div>
            <div className="comments-container">
                <h3>Comments:</h3>
                <div className="comment">
                    <p>User name</p>
                    <p>Some comment</p>
                </div>
                <div className="btn-container">
                        <Link to="" className="btn comment-btn">Add a comment</Link>
                    </div>
            </div>
        </div>
    );
};