import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/ContentContext";
import FavoriteCard from "../components/FavoriteCard";

const FavoritesList = () => {
    const context = useContext(Context);
    const [favoriteList, setFavoriteList] = useState([]);

    useEffect(() => {
        setFavoriteList(context.favorites)
    }, [context.favorites])

    return (
        <div className="container-fluid pt-3">
            <div className="m-1 d-flex flex-column align-items-center">
                {favoriteList.length > 0 ? (
                    favoriteList.map((item) => <FavoriteCard item={item.item} category={item.category} key={item.id} />)
                ) : (
                    <h1 className="text-light">It seems like you don't have any Favorite added yet...</h1>
                )}
            </div>
        </div>
    )
}

export default FavoritesList;