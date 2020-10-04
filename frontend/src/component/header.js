import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <div style={{ 
          height: 70, 
          backgroundColor: 'gray', 
          marginBottom: 50,
          display: 'flex',
          justifyContent: 'space-between'}}>
        <div>
          Tribee
        </div>
        <div>
          검색창
        </div>
        <div>
          icon들 
        </div>
      </div>
    );
  }
}

export default header;