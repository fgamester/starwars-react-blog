import React, { useContext, useEffect } from "react";
import { Context } from "../store/ContentContext";
import CardPreview from "../components/CardPreview";
import { useParams } from "react-router-dom";

const Characters = () => {
    const context = useContext(Context);
    const pathParams = useParams();

    useEffect(() => {
        console.log('test')
    },[])

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-evenly align-items-center">
                {context.store[pathParams.content_cat].map((item, index) => (
                    <CardPreview item={item} categorie={pathParams.content_cat} key={index} />
                ))
                }
            </div>
        </div>
    );
};

export default Characters;