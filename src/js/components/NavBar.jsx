import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark fixed-top container-fluid">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to={'/'}>Star Wars</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars text-light" ></i>
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
                            <i className="visually-hidden fa-solid fa-bars text-light" />
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