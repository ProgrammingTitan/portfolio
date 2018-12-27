import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import { Link } from 'react-router-dom'; 
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div>
      <div style={{height: '100px', position: 'relative'}}>
          <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
              <Header transparent style={{color: 'white'}}>
                <Link to="/" className='HomeButton' style={{ textDecoration: 'none' }} ><h1>Home Page</h1></Link>
                  <Navigation style={{marginLeft: 750}}>
                      <Link to="/projects">Projects</Link>
                      <Link to="/writing" >Writing</Link>
                      <Link to="/contact" >Contact</Link>
                      <Link to="/feedback" >Feedback</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/projects">Projects</Link>
                      <Link to="/writing" >Writing</Link>
                      <Link to="/contact" >Contact</Link>
                      <Link to="/feedback" >Feedback</Link>
                  </Navigation>
              </Drawer>
              <Content>
              </Content>
          </Layout>
          
      </div>
        <Main />
      </div>
    );
  }
}

export default App;
