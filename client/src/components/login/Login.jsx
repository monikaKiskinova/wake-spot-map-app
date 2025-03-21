import { Link } from 'react-router'

import './Login.css'

export default function Login() {

    return (
        <div className="feature">
            <div className="login-container">
                <h2>LOGIN</h2>
                <form className="form login-form" action="">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username" required />

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" required />
                    <input type="submit" className="btn submit" value="Login" />
                </form>
                <p>Your first time here? Go <Link to="/register">register</Link></p>
            </div>
        </div>
    );
};