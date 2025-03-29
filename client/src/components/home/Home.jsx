import { Link } from 'react-router'

import './Home.css'
import { useLatestParks } from '../../api/wakeparkApi';
import ParkArticleItem from './parkArticleItem/ParkArticleItem';

export default function Home() {
    const { latestParks } = useLatestParks();

    return (
        <>
            <div className="feature">
                <div className="title">
                    <h1>The Map of Wakeboard Parks</h1>
                    <Link to="/wakeparks" className="btn see-all-btn">See all parks</Link>
                </div>
            </div>
            <div className="parks-container">

                {latestParks.length > 0
                    ? latestParks.map(park => <ParkArticleItem key={park._id} {...park} />)
                    : <h2 className="no-wakeparks" style={{ padding: "2em", textAlign: "center" }}>No wakeparks yet.</h2>
                }

            </div>
        </>
    );
};