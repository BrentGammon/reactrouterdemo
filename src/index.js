import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Switch, 
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Thing from './thing';



class Index extends Component {
  render(){
    return(
      <div>
        <Router>
          <div>
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route path="/thing" render={() => <Thing/>} />
          </div>
        </Router>
      </div>
  
    )
  }
}






ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
