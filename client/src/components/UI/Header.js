import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default:
                return (<li><a>Logout</a></li>);
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <span className="navbar-brand mb-0 h1">Todo App</span>
                <ul className="navbar-nav ml-auto">
                    {this.renderContent()}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth: auth };
}

export default connect(mapStateToProps)(Header);
