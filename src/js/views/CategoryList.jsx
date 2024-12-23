import React, { useContext } from "react";
import { Context } from "../store/ContentContext";
import CardPreview from "../components/CardPreview";
import { useParams } from "react-router-dom";

const CategoryList = () => {
    const context = useContext(Context);
    const pathParams = useParams();

    return (
        <div className="container-fluid">
            <div className="row g-3 d-flex justify-content-evenly my-3">
                {context?.store[pathParams.content_cat].map((item, index) => (
                    <CardPreview item={item} category={pathParams.content_cat} id={index + 1} key={index} />
                ))
                }
            </div>
        </div>
    );
};

export default CategoryList;