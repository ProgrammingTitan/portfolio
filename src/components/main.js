import React from 'react';
import Landing from './landingpage'; 
import Contact from './contact';
import Feedback from './feedback';
import Writing from './writingportfolio';
import Projects from './programmingprojects';
import { Switch, Route } from 'react-router-dom';

const Main = () => 
(
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/feedback" component={Feedback}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/writing" component={Writing}/>
    </Switch>

) 

export default Main; 