import { Link } from 'react-router'

import './Register.css'

export default function Register() {

    return (
        <div className="feature">
            <div className="register-container">
                <h2>REGISTER</h2>
                <form className="form register-form" action="">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username" required />

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" required />

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" required />
                    <input type="submit" className="btn submit" value="Register" />
                </form>
                <p>Already been on our map? Just <Link to="/login">log in</Link></p>
            </div>
        </div>
    );
};