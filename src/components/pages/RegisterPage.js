import React, { useState } from 'react'
import {Link, useHistory } from "react-router-dom";
import '../../App.css'
import axios from './Axios'
export default function SignUpPage() {

    let history = useHistory();
    

    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { first_name, last_name, email, password } = credentials;
        await axios.post("/api/user/", {
            first_name,
            last_name,
            email,
            password
        });
        history.push("/login");
        // console.log(credentials);

    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>First Name:</label><br />
                    <input type="text" name="first_name" onChange={onChange} required />
                </p>
                <p>
                    <label>Last Name:</label><br />
                    <input type="text" name="last_name" onChange={onChange} required />
                </p>
                <p>
                    <label>Email address</label><br />
                    <input type="email" name="email" onChange={onChange} required />
                </p>
                <p>
                    <label>Password</label><br />
                    <input type="password" name="password" onChange={onChange} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
