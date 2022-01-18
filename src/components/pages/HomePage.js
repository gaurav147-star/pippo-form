import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { selectUser } from "../../redux/userSlice";
const HomePage = () => {
    // const dispatch = useDispatch();
    const user = useSelector(selectUser);
    // console.log(user);

   

    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">{user}</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}

export default HomePage