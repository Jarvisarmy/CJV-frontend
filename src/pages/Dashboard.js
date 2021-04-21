import React from 'react';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import DataContext from './../context/DataContext';
import './../css/Dashboard.css';

const Dashboard = () => {
    const {isLogin, loginUser} = useContext(DataContext);
    if (!isLogin) {
        return (
            <>
                <h> please <Link to="/login"> login </Link></h>
            </>
        )
    } else {
        console.log(loginUser)
        return (
            <div className="dashboard-container">
                <div> username: {loginUser.username}</div>
                <div> firstname: {loginUser.firstName}</div>
                <div> lastname: {loginUser.lastName}</div>
                <div> email: {loginUser.email}</div>
            </div>
        )
    }
}

export default Dashboard