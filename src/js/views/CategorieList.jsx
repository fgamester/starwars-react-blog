import React, { useContext } from "react";
import { Context } from "../store/ContentContext";
import CardPreview from "../components/CardPreview";
import { useParams } from "react-router-dom";

const CategorieList = () => {
    const context = useContext(Context);
    const pathParams = useParams();

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

export default CategorieList;