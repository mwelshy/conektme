import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { RegisterForm } from './components/container.js';
import { Home } from './components/Home.js';


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path={'register'} component={ RegisterForm } />
                </Router>
                <Home/>
            </div>

        )
    }
}
ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
