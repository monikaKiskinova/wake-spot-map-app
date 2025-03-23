import { Link } from 'react-router'

// import './WakeparkItem.css'
// import '../Wakeparks.css'

export default function WakeparkItem({
    _id, name, country, address, mainImageUrl, imageUrl,
}) {

    return (
        <section className="park-article">
            <div className="main-img-container">
                <img src={mainImageUrl} alt="park image or logo" width="450px" />
            </div>
            <div className="park-details-container">
                <div className="name-and-location-container">
                    <h2>{name}</h2>
                    <p className="location">{country}</p>
                    <p className="address">{address}</p>
                </div>
                <div className="images-container">
                    <div className="img-container">
                        <img src="/images/article-img.jpg" alt="" width="220px" />
                    </div>
                    <div className="img-container">
                        <img src="/images/article-img.jpg" alt="" width="220px" />
                    </div>
                    <div className="img-container">
                        <img src="/images/article-img.jpg" alt="" width="220px" />
                    </div>
                </div>
                <div className="btn-container">
                    <Link to={`/wakeparks/${_id}/details`} className="btn see-more-btn">See more...</Link>
                </div>
            </div>
        </section>
    );
};