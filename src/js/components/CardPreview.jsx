import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/ContentContext";
import { FaRegHeart, FaHeart, FaRegBookmark, FaBookmark } from "react-icons/fa";


const CardPreview = ({ item, categorie }) => {
    const context = useContext(Context);
    const [favorite, setFavorite] = useState(false);
    const [later, setLater] = useState(false);
    const [displayedItem, setDisplayedItem] = useState({});

    const favoriteToggle = () => {
        if (favorite) context.actions.removeFavorite(item);
        else context.actions.addFavorite(item);
    }

    const getLaterState = () => {
        const isFavorite = context.favorites.some(i => i === item);
        setFavorite(isFavorite);
    }

    const getFavState = () => {
        const isFavorite = context.favorites.some(i => i === item);
        setFavorite(isFavorite);
    }

    const categorieSwitcher = () => {
        let newItem = {};
        switch (categorie) {
            case ('films'):
                newItem = { name: item.properties.title, img: item.imgUrl, resume: item.description };
                setDisplayedItem(newItem);
                break;
            case ('characters'):
                newItem = { name: item.name, img: item.imgUrl, resume: 'Character resume...' };
                setDisplayedItem(newItem);
                break;
            case ('planets'):
                newItem = { name: item.name, img: item.imgUrl, resume: 'Planet resume...' };
                setDisplayedItem(newItem);
                break;
            case ('species'):
                newItem = { name: item.name, img: item.imgUrl, resume: 'Specie resume...' };
                setDisplayedItem(newItem);
                break;
            case ('starships'):
                newItem = { name: item.name, img: item.imgUrl, resume: 'Starship resume...' };
                setDisplayedItem(newItem);
                break;
            case ('vehicles'):
                newItem = { name: item.name, img: item.imgUrl, resume: 'Vehicle resume...' };
                setDisplayedItem(newItem);
                break;
        }
    }

    useEffect(() => {
        categorieSwitcher();
    }, [])

    useEffect(() => {
        getFavState();
    }, [context.favorites])

    return (
        <div className="col col-12 col-sm-9 col-md-6 col-lg-4 col-xxl-3">
            <div className="card text-bg-dark mt-4 m-2">
                <img src={displayedItem.img} className={"card-img-top"} alt={displayedItem.name + " image"} />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{displayedItem.name}</h5>
                        <button className="btn btn-secondary my-auto" onClick={() => favoriteToggle()}>
                            {!favorite ? (
                                <FaRegHeart />
                            ) : (
                                <FaHeart />
                            )}
                        </button>
                    </div>
                    <p className="card-text">{displayedItem.resume}</p>
                    <button className="btn btn-primary">Read Later</button>
                </div>
            </div>
        </div>
    );
}

export default CardPreview;