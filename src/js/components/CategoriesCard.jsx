import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ to, tittle, resume }) => {
    return (
        <div className="col col-12 col-sm-9 col-md-6 col-lg-4">
            <div className="card bg-dark m-1">
                <div className="card-body">
                    <Link to={to} className="card-title text-light text-light text-center">{tittle}</Link>
                    <p className="card-text text-light">{resume}</p>
                </div>
            </div>
        </div>
    );
}

export default CategoriesCard;