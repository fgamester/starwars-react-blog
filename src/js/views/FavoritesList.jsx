import React, { useContext } from "react";
import { Context } from "../store/ContentContext";
import FavoriteCard from "../components/FavoriteCard";

const FavoritesList = () => {
    const context = useContext(Context);
    return (
        <div className="container-fluid pt-3">
            <div className="m-1 d-flex flex-column align-items-center">
            {context.favorites.map((item, i) => <FavoriteCard item={item.item} category={item.category} key={i} />)}
            </div>
        </div>
    )
}

export default FavoritesList;