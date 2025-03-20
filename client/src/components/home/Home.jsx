import { Link } from 'react-router'

import './Home.css'

export default function Home() {
    return (
        <>
            <div className="feature">
                <div className="title">
                    <h1>The Map of Wakeboard Parks</h1>
                    <Link className="btn see-all-btn">See all parks</Link>
                </div>
            </div>
            <div className="parks-container">
                <article className="park-article">
                    <h2>Park Name</h2>
                    <p className="country">Country</p>
                    <div className="img-container">
                        <img src="/public/images/article-img.jpg" alt="" width="400px" />
                    </div>
                    <Link className="btn see-more-btn">See more...</Link>
                </article>
                <article className="park-article">
                    <h2>Park Name</h2>
                    <p className="country">Country</p>
                    <div className="img-container">
                        <img src="/public/images/article-img.jpg" alt="" width="400px" />
                    </div>
                    <Link className="btn see-more-btn">See more...</Link>
                </article>
                <article className="park-article">
                    <h2>Park Name</h2>
                    <p className="country">Country</p>
                    <div className="img-container">
                        <img src="/public/images/article-img.jpg" alt="" width="400px" />
                    </div>
                    <Link className="btn see-more-btn">See more...</Link>
                </article>
            </div>
        </>
    );
};