export default function CommentItem(comment) {
    return (
        <div className="comment">
            <p>{comment.username}: {comment.comment}</p>
        </div>
    );
};