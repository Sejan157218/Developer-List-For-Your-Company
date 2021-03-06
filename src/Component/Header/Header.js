import React from 'react';
import './Header.css'
const Header = (props) => {
    return (
        <div>
            <header className="">
                <nav className="navbar navbar-expand-lg navbar-light header-nav rounded">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="/#">ASH BD</a>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/#">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/#">Team</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input onChange={props.searchhandler} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                        </div>
                    </div>
                    </nav>
             </header>
        </div>
    );
};

export default Header;