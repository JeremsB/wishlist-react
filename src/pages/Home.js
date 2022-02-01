import React from 'react';
import {Navigate} from "react-router-dom";

function Home(props){
    return(
        <div>
        {localStorage.getItem('token') ? (
            <Navigate replace to="/presents" />
        ) : (
            <Navigate replace to="/login" />
        )}
        </div>
    )
}

export default Home
