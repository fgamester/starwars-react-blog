import React from "react";
import { Link } from "react-router-dom";


const Categories = () => {
    return (
        <div>
            <div>
                <Link to={'/content/characters'} className="text-light">Characters </Link>
                <Link className="text-light">Films </Link>
                <Link className="text-light">Species </Link>
                <Link className="text-light">Starships </Link>
                <Link className="text-light">Vehicles </Link>
                <Link className="text-light">Planets </Link>
            </div>
        </div>
    );
}

export default Categories;