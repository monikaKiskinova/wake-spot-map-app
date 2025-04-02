import { Link } from 'react-router'

import './Header.css'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
// import styles from './Header.module.css'

export default function Header() {
    const { username } = useContext(UserContext);
    const [isActive, setIsActive] = useState(false)

    const toggleIsActive = () => {
        setIsActive((isActive) => !isActive);
    }

    useEffect(() => {
        const handleWindowResize = ()  => {
            if (window.addEventListener) {
                setIsActive(false);
            } 
        }
      
          window.addEventListener('resize', handleWindowResize)
    }, []);

      console.log(window.innerWidth)

    return (
        <header>
            <div id="logo-container">
                <p className="logo" id="logo"><Link to="/">Wake Spot Map</Link></p>
            </div>
            <nav>
                <div className="nav-items-container" id="nav-items-container">
                    <ul className="nav-items">
                        <li className={isActive ? 'active' : ''}> <Link onClick={toggleIsActive} to="/">Home</Link></li>
                        <li className={isActive ? 'active' : ''}> <Link onClick={toggleIsActive} to="/wakeparks">Wake Parks</Link></li>

                        {username
                            ? (
                                <>
                                    {/* <!-- loggedIn user --> */}
                                    <li className={isActive ? 'active' : ''}> <Link onClick={toggleIsActive} className="create" to="/wakeparks/create">Add a wakepark</Link></li>
                                    {/* <li> <Link className="profile" to="/profile">{username}'s Profile</Link></li> */}
                                    <li className={isActive ? 'active' : ''}> <Link onClick={toggleIsActive} className="logout" to="/logout">Log out</Link></li>
                                </>
                            )
                            : (
                                <>
                                    {/* <!-- all users --> */}
                                    <li className={isActive ? 'active' : ''}> <Link onClick={toggleIsActive} className="create" to="/wakeparks/create">Add a wakepark</Link></li>
                                    <li className={isActive ? 'active' : ''}> <Link onClick={toggleIsActive} className="login" to="/login">Log in</Link></li>
                                </>
                            )
                        }
                    </ul>
                    <div id="hamburger-menu" onClick={toggleIsActive}>
                        <div className="bar" />
                        <div className="bar" />
                        <div className="bar" />
                    </div>
                </div>
            </nav>
        </header>
    );
};