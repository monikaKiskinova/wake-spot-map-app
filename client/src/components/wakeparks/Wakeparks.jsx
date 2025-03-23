import { useEffect, useState } from 'react';

import './Wakeparks.css'
import { wakeparkService } from '../../services/wakeparksService';
import WakeparkItem from './wakepark-item/WakeparkItem'

export default function Wakeparks() {
    const [parks, setParks] = useState([]);

    useEffect(() => {
        wakeparkService.getAll()
            .then(result => {
                setParks(result)
            })
    }, []);

    return (
        <div className="outer-container">
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
                    : <h3 className="no-wakeparks">No wakeparks yet.</h3>
                }

            </div>
        </div>
    );
};