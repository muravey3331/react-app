import React, {Component} from 'react'
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);
const About = () => (
    <div>
        <h2>About</h2>
    </div>
);
const Blog = () => (
    <div>
        <h2>Blog</h2>
    </div>
);


class App extends Component {
    render() {
        return (<Router history={history}>
            <div>
                <ul>
                    <li><Link to="/">Home</Link>></li>
                    <li><Link to="/about">About</Link>></li>
                    <li><Link to="/blog">Blog</Link>></li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/blog" component={Blog}/>
            </div>
        </Router>)
    }
}

export default App;
