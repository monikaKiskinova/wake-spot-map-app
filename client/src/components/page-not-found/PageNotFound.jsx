import { Link } from 'react-router'

import './PageNotFound.css'

export default function PageNotFound() {
    return (
        <div className='page-not-found-container'>
            <h1>404</h1>
            <p>Oops, that page must have fallen flat on the water.</p>
            <p>You can get back on board <Link to="/">here</Link>.</p>
        </div>
    );
};