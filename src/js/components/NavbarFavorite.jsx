import React from "react";
import {  useNavigate } from "react-router-dom";
import '../../styles/NavbarFavorite.css'

const NavbarFavorite = ({ item }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(item.path)
    }

    return (
        <li className="dropdown-item navbar-fav-hover" onClick={() => handleClick()}>
            <h5 className="" >item</h5>
        </li>
    )
}

export default NavbarFavorite;