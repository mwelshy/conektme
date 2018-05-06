import React, {Component} from 'react';
import {Hero} from './header.js';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {RegisterForm} from './register.js';
import '../App.css';



export class Home extends Component {
    render() {
        return (
            <div className="App">
                <Hero/>
            </div>
        );
    }
}


export default Home;
