import React, { Component } from 'react';
import Data from './components/Data';
import Carousel from './components/Carousel';
import NavBar from './components/NavBar';
import './App.css';
/*
*/
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objectData: {}
        };
        this.getObjData = this.getObjData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // get data for random object from Met Collection api
    getObjData() {
        let random = Math.floor(Math.random() * 817364);
        console.log(random);
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${random}`)
            .then(response => response.json())
            .then(data => {
                data.message ? this.getObjData() : data.primaryImage === '' ? this.getObjData() :
                this.setState({
                objectData: data
            })})
            .catch(() => {
                console.log('MetMuseum api request error');
            });
    }

    // "Give me more" button
    handleChange(e) {
        e.preventDefault();
        this.getObjData();
    }

    componentDidMount() {
        this.getObjData();
    }

    render() {
        return (
            <div className="App">
                <NavBar button={this.handleChange} link={this.state.objectData.objectURL}/>
                <Data object={this.state.objectData} />
                <Carousel image={this.state.objectData} />
                <footer>
                    <p className="subscribe">Subscribe: <a href="https://www.linkedin.com/in/polina-kochneva-6454b393/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square"></i></a> <a href="https://www.facebook.com/pollycr" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook-square"></i></a></p>
                    <p>&copy; Artify, Inc 2018</p>
                </footer>
            </div>
        );
    }
}

export default App;
