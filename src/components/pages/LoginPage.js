import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import '../../App.css'
import axios from './Axios'
import { useDispatch } from "react-redux";
import { login } from "./../../redux/userSlice";


export default function SignInPage() {

    let history = useHistory();
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credentials;
        await axios.post("/api/token/",
            {
                email,
                password
            });
        history.push("/home");
        // console.log(credentials);

        dispatch(login({
            email: email,
            password: password,
            loggedIn: true,
            message: "logged in "

        }))
    };

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Email address</label><br />
                    <input type="email" name="email" onChange={onChange} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br />
                    <input type="password" name="password" onChange={onChange} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
