import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { RegisterForm } from './components/register.js';
import { Home } from './components/Home.js';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path={'/'} component={ Home } />
                    <Route path={'/register'} component={ RegisterForm } />
                    <Route path={'/about'} component={ RegisterForm } />
                </div>
            </Router>

        )
    }
}
ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
