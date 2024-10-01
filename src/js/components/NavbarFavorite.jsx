import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/ContentContext";
import { FaRegTrashCan } from "react-icons/fa6";
import '../../styles/NavbarFavorite.css'

const NavbarFavorite = ({ item }) => {
    const context = useContext(Context);
    const navigate = useNavigate();
    const [itemName, setItemName] = useState('');

    const getName = () => {
        switch (item.category) {
            case ('films'):
                setItemName(item.item.properties.title);
                break;
            default:
                setItemName(item.item.name)
                break;
        }
    }

    useEffect(() => {
        getName();
    }, [context.favorites])

    const onClickRemove = () => {
        context.actions.removeFavorite(item.item);
    }

    const onClickNavigate = () => {
        navigate(item.path)
    }

    return (
        <li className="dropdown-item navbar-fav-hover d-flex align-items-center justify-content-between item-hover">
            <h5 className="" onClick={() => onClickNavigate()} >{itemName}</h5>
            <FaRegTrashCan className="ms-2 icon-hover" onClick={() => onClickRemove()} />
        </li>
    )
}

export default NavbarFavorite;