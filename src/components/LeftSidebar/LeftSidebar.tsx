import React from "react";
import "../LeftSidebar/LeftSidebar.css"
import { FaBeer, FaHome, FaProductHunt } from "react-icons/fa";
import { Route, Link } from "react-router-dom";

function LeftSidebar() {
    return (
        <div className="left-sidebar">

            <div className="left-sidebar-icons-div">

                <Link className="left-sidebar-links" to="/">
                    <FaHome className="left-sidebar-icons" />
                </Link>

                <Link className="left-sidebar-links" to="/products">
                    <FaProductHunt className="left-sidebar-icons" />
                </Link>

                <Link className="left-sidebar-links" to="/">
                    <FaHome className="left-sidebar-icons" />
                </Link>

                <Link className="left-sidebar-links" to="/">
                    <FaHome className="left-sidebar-icons" />
                </Link>

                <Link className="left-sidebar-links" to="/">
                    <FaHome className="left-sidebar-icons" />
                </Link>

                <Link className="left-sidebar-links" to="/">
                    <FaHome className="left-sidebar-icons" />
                </Link>

                <Link className="left-sidebar-links" to="/">
                    <FaHome className="left-sidebar-icons" />
                </Link>

            </div>
        </div>
    )
}

export default LeftSidebar;