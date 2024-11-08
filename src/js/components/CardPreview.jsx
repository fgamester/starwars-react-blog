import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/ContentContext";
import { FaRegHeart, FaHeart, FaRegBookmark, FaBookmark } from "react-icons/fa";


const CardPreview = ({ item, category }) => {
    const context = useContext(Context);
    const [favorite, setFavorite] = useState(false);
    const [later, setLater] = useState(false);
    const [displayedItem, setDisplayedItem] = useState({});

    const laterTogle = () => {
        if (later) context.actions.removeReadLater(item);
        else context.actions.addReadLater({ 'category': category, 'item': item, 'path': `/content/${category}/${item.uid}` });
    }

    const getLaterState = () => {
        const toReadLater = context.readLater.some(i => i.item === item);
        setLater(toReadLater);
    }

    const favoriteToggle = () => {
        if (favorite) context.actions.removeFavorite(item);
        else context.actions.addFavorite({ 'category': category, 'item': item, 'path': `/content/${category}/${item.uid}` });
    }

    const getFavState = () => {
        const isFavorite = context.favorites.some(i => i.item === item);
        setFavorite(isFavorite);
    }

    const categorySwitcher = () => {
        let newItem = {};
        switch (category) {
            case ('films'):
                newItem = { name: item.properties.title, img: item.imgUrl, resume: item.description };
                setDisplayedItem(newItem);
                break;
            default:
                newItem = { name: item.name, img: item.imgUrl, resume: 'Card resume...' };
                setDisplayedItem(newItem);
                break;
        }
    }

    useEffect(() => {
        categorySwitcher();
    }, [])

    useEffect(() => {
        getLaterState();
    }, [context.readLater])

    useEffect(() => {
        getFavState();
    }, [context.favorites])

    return (
        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
            <div className="card text-bg-dark mt-4 m-2">
                <img src={displayedItem.img} className="card-img-top" alt={displayedItem.name + " image"} />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/content/${category}/${item.uid}`}
                            className="card-title link-light link-underline-opacity-0 link-underline-opacity-75-hover fs-5">
                            {displayedItem.name}
                        </Link>
                        <button className="btn btn-secondary my-auto" onClick={() => favoriteToggle()}>
                            {!favorite ? (
                                <FaRegHeart />
                            ) : (
                                <FaHeart />
                            )}
                        </button>
                    </div>
                    <p className="card-text">{displayedItem.resume}</p>
                    <button className="btn btn-primary w-100" onClick={() => laterTogle()}>
                        Read Later
                        {later ? (
                            <FaBookmark className="ms-1" />
                        ) : (
                            <FaRegBookmark className="ms-1" />
                        )
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardPreview;