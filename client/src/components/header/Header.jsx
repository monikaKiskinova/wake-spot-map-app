import { Link } from 'react-router'

import './Header.css'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
// import styles from './Header.module.css'

export default function Header() {
    const { username } = useContext(UserContext);

    return (
        <header>
            <div id="logo-container">
                <p className="logo" id="logo"><Link to="/">Wake Spot Map</Link></p>
            </div>
            <nav>
                <div className="nav-items-container" id="nav-items-container">
                    <ul className="nav-items">
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/wakeparks">Wake Parks</Link></li>

                        {username
                            ? (
                                <>
                                {/* <!-- loggedIn user --> */}
                                    <li> <Link className="create" to="/wakeparks/create">Add a wakepark</Link></li>
                                    <li> <Link className="profile" to="/profile">{username}'s Profile</Link></li>
                                    <li> <Link className="logout" to="/logout">Log out</Link></li>
                                </>
                            )
                            : (
                                <>
                                    {/* <!-- all users --> */}
                                    <li> <Link className="login" to="/login">Log in</Link></li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
};