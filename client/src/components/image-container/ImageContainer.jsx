export default function ImageContainer({image}) {
    return (
        <div className="img-container">
            <img src={image} alt="image from the wakepark" width="220px" />
        </div>
    );
};