import React, { Component } from 'react';

class NestedThing2 extends Component {

  render() {
    return (
      <div>
        <h1>NestedThing2</h1>
        {this.props.item}
      </div>
     
    );
  }
}

export default NestedThing2;
