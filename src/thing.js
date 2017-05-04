import React, { Component } from 'react';
import {
 Link,
  Switch, 
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import NestedThing from './NestedThing';
import NestedThing2 from './NestedThing2';
import "./app.css";

class Thing extends Component {

constructor(){
    super();
    this.state = {
        hello: "world",
        propThing: "thingy"
    }
}

  render() {
    return (
      <div>
        <h1>Thing</h1>
        <Link to="/thing/nestedthing">NestedThing</Link>
        <Link to="/thing/nestedthing2">NestedThing2</Link>
        <Route path="/thing/nestedthing" render={()=><NestedThing item={this.state.hello}/>}/>
        <Route path="/thing/nestedthing2" render={()=><NestedThing2 item={this.state.propThing}/>}/>
      </div>
     
    );
  }
}

export default Thing;
