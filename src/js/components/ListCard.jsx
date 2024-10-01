import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/ContentContext";
import { FaRegHeart, FaHeart, FaRegBookmark, FaBookmark } from "react-icons/fa";


const ListCard = ({ item, category }) => {
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
                newItem = { 'name': item.properties.title, 'img': item.imgUrl, 'resume': item.description };
                setDisplayedItem(newItem);
                break;
            default:
                newItem = { 'name': item.name, 'img': item.imgUrl, 'resume': 'Card resume...' };
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
        <div className="col-12 col-md-8 col-lg-6 col-xxl-4 d-flex justify-content-center">
            <div className="card mb-3 col">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                        <img src={displayedItem.img} className="img-fluid rounded-start" alt={`${displayedItem.name} image`} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <h5 className="card-title">{displayedItem.name}</h5>
                                <button className="btn btn-secondary my-auto" onClick={() => favoriteToggle()}>
                                    {!favorite ? (
                                        <FaRegHeart />
                                    ) : (
                                        <FaHeart />
                                    )}
                                </button>
                            </div>
                            <button className="btn btn-primary w-100 my-1" onClick={() => laterTogle()}>
                                Read Later
                                {later ? (
                                    <FaBookmark className="ms-1" />
                                ) : (
                                    <FaRegBookmark className="ms-1" />
                                )}
                            </button>
                            <p className="card-text">
                                {displayedItem.resume}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCard;