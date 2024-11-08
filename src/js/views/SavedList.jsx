import React, { useContext } from "react";
import { Context } from "../store/ContentContext";
import ListCard from "../components/ListCard";
import { useParams } from "react-router-dom";

const SavedList = () => {
    const context = useContext(Context);
    const params = useParams();

    const listMap = {
        'later': context.readLater,
        'favorites': context.favorites
    }

    const messageText = {
        'later': 'Read Later',
        'favorites': 'Favorites'
    }

    const renderList = listMap[params.saved_list];
    const renderMessage = messageText[params.saved_list];

    return (
        <div className="container-fluid pt-3">
            <div className="m-1 d-flex flex-column align-items-center">
                {renderList.length > 0 ? (
                    renderList.map((item) => <ListCard item={item.item} category={item.category} path={item.path} key={`${params.saved_list}_${item.id}`} />)
                ) : (
                    <h1 className="text-light">{`It seems like you don't have any ${renderMessage} added yet...`}</h1>
                )}
            </div>
        </div>
    )
}

export default SavedList;