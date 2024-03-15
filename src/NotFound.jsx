import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
    return (
        <div className="page-not-found">
            <h1>404 the page not found</h1>
            <h2><Link to="/portal/Home">Home</Link> </h2>

        </div>
    )
}

export default NotFound