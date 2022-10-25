import React from "react";

const NavBar = () => {
    return ( 
        <div className="btn-group-vertical">
    <a type="button" className="btn btn-primary" href="/">Home</a>
    <a type="button" className="btn btn-primary" href="/dashboard">Dashboard</a>
    <a type="button" className="btn btn-primary" href="/notifications">Notifications</a>
    <a type="button" className="btn btn-primary" href="/allcourses">All Courses</a>
    <a type="button" className="btn btn-primary" href="/dictionary">Dictionary</a>
    <a type="button" className="btn btn-primary" href="/myDictionary">My dictionary</a>
    <a type="button" className="btn btn-primary" href="/support">Support</a>
        </div> 
        );
    };
 
export default NavBar;