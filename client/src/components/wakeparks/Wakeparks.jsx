import './Wakeparks.css'

import WakeparkItem from './wakepark-item/WakeparkItem'
import { useParks } from '../../api/wakeparkApi';

export default function Wakeparks() {
    const {parks} = useParks(); 

    return (
        <div id="outer-container" className="outer-container">
            <h1 className="all-wakeparks">All Wakeparks</h1>
            <div className="search-container">
                <form className="form search-form">
                    <label htmlFor="search">Search</label>
                    <input type="search" id="search" name="search" placeholder="Search" />
                </form>
            </div>
            <div className="wakeparks-container">

                {parks.length > 0
                    ? parks.map(park => <WakeparkItem key={park._id} {...park} />)
                    : <h3 className="no-wakeparks" style={{paddingTop: "2em", paddingBottom: "5em", textAlign: "center"}}>No wakeparks yet.</h3>
                }

            </div>
        </div>
    );
};