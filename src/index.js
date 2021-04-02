import React from 'react';
import ReactDOM from 'react-dom';

// Main routers
import Overview from './overview/Overview';
import Ecosystem from './ecosystem/Ecosystem';
import About from './about/About';
import Products from './products/Products';
import Plan from './plan/Plan';
import Contact from './contact/Contact';

// Footer
//import FooterContent from './footer/FooterContent';

import './index.css';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  NavLink
} from 'react-router-dom'


class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style: 'normal' };
    this.updateStyles = this.updateStyles.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.updateStyles)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateStyles);
  }
  updateStyles() {
    this.setState({
      style: (window.pageYOffset > 64) ? 'compact' : 'normal'
    });
  }
  render() {
    return (
      
      
      
      <nav id="navigator" className={this.state.style || 'normal'}>
        
        <img className="logo-img" src={require('./logo.png')} width="60" height="60" alt="logo"  />
            
        <ul className="container">
         
          <li><NavLink to="/overview" activeStyle={{ color: 'orangered' }}>Overview</NavLink></li>
          <li><NavLink to="/ecosystem" activeStyle={{ color: 'orangered' }}>Ecosystem</NavLink></li>
          <li><NavLink to="/product" activeStyle={{ color: 'orangered' }}>Product</NavLink></li>
          <li><NavLink to="/usecases" activeStyle={{ color: 'orangered' }}>Use Cases</NavLink></li>
          <li><NavLink to="/team" activeStyle={{ color: 'orangered' }}>Team</NavLink></li>
          <li><NavLink to="/contact" activeStyle={{ color: 'orangered' }}>Contact us</NavLink></li>
        </ul>
      </nav>
      
    )
  }
}



const App = () => (
  <Router>
    <div className="wrapper section">
      <Navigator />
      <main>
        <Route exact path="/" render={() => (
          <Redirect to="/overview"/>
        )}/>
        <Route exact path="/overview" component={Overview}/>
        <Route exact path="/ecosystem" component={Ecosystem}/>
        <Route exact path="/product" component={Products}/>
        <Route exact path="/usecases" component={Plan}/>
        <Route exact path="/team" component={About}/>
        <Route exact path="/contact" component={Contact}/>
      </main>
     
    </div>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
