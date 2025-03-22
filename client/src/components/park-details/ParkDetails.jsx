import { Link } from 'react-router'

import './ParkDetails.css'

export default function ParkDetails() {
    return (
        <div className="outer-container">
            <div className="details-container">
                <div className="images-container">
                    <div className="main-img-container">
                        <img src="https://welldoers.com/dynamic/gallery/OTdQ9yoDhN.jpg" alt="" width="450px" />
                    </div>
                    <div className="small-images-container">
                        <img src="/images/article-img.jpg" alt="" width="220px" />
                        <img src="/images/article-img.jpg" alt="" width="220px" />
                        <img src="/images/article-img.jpg" alt="" width="220px" />
                    </div>
                </div>
                <div className="park-details-container">
                    <div className="info-container">
                        <h2>Welldoers</h2>
                        <p className="location">Bulgaria</p>
                        <p className="address">4147 Kalekovets, Plovdiv</p>
                        <p className="info">Welldoers is located only 13km from “Kapana” in Plovdiv, in the field of the village of Kalekovets.
                            The park has two lines - Rookie and Pro.</p>
                    </div>
                    <div className="btn-container">
                        <Link to="" className="btn edit-btn">Edit</Link>
                        <Link to="" className="btn delete-btn">Delete</Link>
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