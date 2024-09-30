import React, { useContext } from "react";
import { Context } from "../store/ContentContext";
import CardPreview from "../components/CardPreview";

const Characters = () => {
    const context = useContext(Context);

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-evenly">
                {context.store.characters.map((item, index) => (
                    <CardPreview character={item} key={index} />
                ))
                }
            </div>
        </div>
    );
};

export default Characters;