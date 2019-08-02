import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <span className="navbar-brand mb-0 h1">Todo App</span>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <a> Login with Google </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;
