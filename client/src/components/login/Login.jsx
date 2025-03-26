import { Link, useNavigate } from 'react-router'
import { useActionState } from 'react'

import './Login.css'
import { useLogin } from '../../api/authApi';

export default function Login({
    onLogin, 
}) {
    const navigate = useNavigate();
    const {login} = useLogin();

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData); 
        console.log(values);
        const authData = await login(values.email, values.password);
        console.log(authData);
        onLogin(authData);
        navigate('/wakeparks');
        return authData;
    };

    const [_, loginAction, isPending] = useActionState(loginHandler, {email: '', password: ''})

    return (
        <div className="feature">
            <div className="login-container">
                <h2>LOGIN</h2>
                <form className="form login-form" action={loginAction}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" required />
                    <input type="submit" className="btn submit login-btn" disabled={isPending} value="Login" />
                </form>
                <p>Your first time here? Go <Link to="/register">register</Link></p>
            </div>
        </div>
    );
};