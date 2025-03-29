import { Link } from 'react-router'

export default function ParkArticleItem({
    _id, name, country, mainImageUrl
}) {

    return (
        <article className="park-article">
            <div className="info-container">
                <h2>{name}</h2>
                <p className="country">{country}</p>
                <div className="img-container">
                    <img src={mainImageUrl} alt="" width="400px" />
                </div>
            </div>
            <Link to={`/wakeparks/${_id}/details`} className="btn see-more-btn">See more...</Link>
        </article>
    );
};