import React, { Component } from 'react';
import './css/NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Artify.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="https://metmuseum.org/art/collection" target="_blank" rel="noopener noreferrer">View Full MetMuseum Collection</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit" onClick={this.props.button}>Just One More</button>
                    </form>
                </div>
            </nav>
        );
    }
}
