import React, { Component } from 'react';

class NestedThing extends Component {

  render() {
    return (
      <div>
        <h1>NestedThing</h1>
        {this.props.item}
      </div>
     
    );
  }
}

export default NestedThing;
