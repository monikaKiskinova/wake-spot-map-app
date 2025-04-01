import { Link } from 'react-router'

import ImageContainer from '../../image-container/ImageContainer';

// import './WakeparkItem.css'
// import '../Wakeparks.css'

export default function WakeparkItem({
    _id, name, country, address, mainImageUrl, imageUrls,
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

                    {imageUrls?.length > 0
                        ?
                        imageUrls.map(image => <ImageContainer key={imageUrls.indexOf(image)} image={image} />) 
                        : null
                    }

                </div>
                <div className="btn-container">
                    <Link to={`/wakeparks/${_id}/details`} className="btn see-more-btn">See more...</Link>
                </div>
            </div>
        </section>
    );
};