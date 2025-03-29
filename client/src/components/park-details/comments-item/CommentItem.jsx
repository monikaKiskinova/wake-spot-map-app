import { Link } from "react-router";

import './CommentItem.css'
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";


export default function CommentItem(comment) {
    const { username } = useContext(UserContext);

    return (
        <div className="comment">
            <p>{comment.username}: {comment.comment}
                {comment.username === username
                    ?
                    <>
                    <Link to={`/comments/${comment._id}/edit`}>(Edit</Link> <Link to="#">Delete)</Link>
                    </>
                    : null}
            </p>

        </div>
    );
};