import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/ContentContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";


const CardPreview = ({ character }) => {
    const context = useContext(Context);
    const [favorite, setFavorite] = useState(false);

    const favoriteToggle = () => {
        if (favorite) context.actions.removeFavorite(character);
        else context.actions.addFavorite(character);
    }

    const getFavState = () => {
        const isFavorite = context.favorites.some(item => item === character);
        setFavorite(isFavorite);
    }

    useEffect(() => {
        getFavState();
    }, [context.favorites, character])

    return (
        <div className="col col-12 col-sm-9 col-md-6 col-lg-4 col-xxl-3">
            <div className="card text-bg-dark mt-4 m-2">
                <img src={character.imgUrl} className="card-img-top" alt={character.name + " image"} />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">Character resume...</p>
                    <button className="btn btn-primary" onClick={() => favoriteToggle()}>
                        {!favorite ? (
                            <FaRegHeart/>
                        ) : (
                            <FaHeart/>
                        )}
                    </button>
                    <button className="btn btn-primary">Read Later</button>
                </div>
            </div>
        </div>
    );
}

export default CardPreview;