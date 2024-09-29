import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/ContentContext";

const NavBar = () => {
    const context = useContext(Context);

    return (
        <nav className="navbar navbar-expand-sm bg-dark position-fixed-top container-fluid">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to={'/'}>Star Wars</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={"/content"}>Content</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={'/later'}>Read Later</Link>
                        </li>
                    </ul>
                    <div className="btn-group">
                        <Link className="btn btn-secondary" to={'/favorites'}>Favorites</Link>
                        <button className="btn btn-secondary dropdown-toggle dropdown-toggle-split text-light" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">hiddenButton</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><Link className="dropdown-item">item</Link></li>
                            {/* favoritos aqui */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;