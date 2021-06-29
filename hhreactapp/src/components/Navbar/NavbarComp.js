import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo-symbol.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComp = () => {
    return (
        <div>
            <Navbar bg="dark" expand="true" variant="light">
                <Navbar.Brand href="#h">
                    <img
                        src={logo}
                        alt="Helpful Human logo"
                    />
                </Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default NavbarComp;