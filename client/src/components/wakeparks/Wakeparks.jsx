import { Link } from 'react-router'

import './Wakeparks.css'

export default function Wakeparks() {
    return (
        <div className="outer-container">
            <div className="search-container">
                <form className="form search-form">
                    <label for="search">Search</label>
                    <input type="search" id="search" name="search" placeholder="Search" />
                </form>
            </div>
            <div className="wakeparks-container">
                <section className="park-article">
                    <div className="main-img-container">
                        {/* <img src="/images/article-img.jpg" alt="" width="450px" /> */}
                        <img src="https://wakescout.com/wp-content/uploads/2020/03/REA_beb9368ffcf14f0857624ef90e14eecaff4e16f2-920x518.jpeg" alt="" width="450px" />
                    </div>
                    <div className="park-details-container">
                        <div className="name-and-location-container">
                            {/* <h2>Park Name</h2> */}
                            <h2>Park X Plovdiv</h2>
                            <p className="location">Bulgaria</p>
                            <p className="address">Stryama, Plovdiv</p>
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
                            <Link to="" className="btn see-more-btn">See more...</Link>
                        </div>
                    </div>
                </section>
                <section className="park-article">
                    <div className="main-img-container">
                        <img src="https://welldoers.com/dynamic/gallery/OTdQ9yoDhN.jpg" alt="" width="450px" />
                    </div>
                    <div className="park-details-container">
                        <div className="name-and-location-container">
                            <h2>Welldoers</h2>
                            <p className="location">Bulgaria</p>
                            <p className="address">4147 Kalekovets, Plovdiv</p>
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
                            <Link to="" className="btn see-more-btn">See more...</Link>
                        </div>
                    </div>
                </section>
                <section className="park-article">
                    <div className="main-img-container">
                        <img src="/images/article-img.jpg" alt="" width="450px" />
                    </div>
                    <div className="park-details-container">
                        <div className="name-and-location-container">
                            <h2>Park Name</h2>
                            <p className="location">Country</p>
                            <p className="address">Address</p>
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
                            <Link to="" className="btn see-more-btn">See more...</Link>
                        </div>
                    </div>
                </section>
                <section className="park-article">
                    <div className="main-img-container">
                        <img src="/images/article-img.jpg" alt="" width="450px" />
                    </div>
                    <div className="park-details-container">
                        <div className="name-and-location-container">
                            <h2>Park Name</h2>
                            <p className="location">Country</p>
                            <p className="address">Address</p>
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
                            <Link to="" className="btn see-more-btn">See more...</Link>
                        </div>
                    </div>
                </section>
                <section className="park-article">
                    <div className="main-img-container">
                        <img src="/images/article-img.jpg" alt="" width="450px" />
                    </div>
                    <div className="park-details-container">
                        <div className="name-and-location-container">
                            <h2>Park Name</h2>
                            <p className="location">Country</p>
                            <p className="address">Address</p>
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
                            <Link to="" className="btn see-more-btn">See more...</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};