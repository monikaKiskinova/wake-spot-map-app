import { Link } from 'react-router'

import './Header.css'
// import styles from './Header.module.css'

export default function Header() {

    return (
        <header>
            <div id="logo-container">
                <p className="logo"><Link to="/">Wake Spot Map</Link></p>
            </div>
            <nav>
                <div className="nav-items-container" id="nav-items-container">
                    <ul className="nav-items">
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/wakeparks">Wake Parks</Link></li>

                        {/* <!-- loggedIn user --> */}
                        <li> <Link className="profile" to="/profile">My Profile</Link></li>
                        <li> <Link className="proflogoutile" to="/logout">Log out</Link></li>

                        {/* <!-- all users --> */}
                        <li> <Link className="login" to="/login">Log in</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};