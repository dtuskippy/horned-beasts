import React from 'react';
import App from './App';
import './hornedBeast.css'

class HornedBeast extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render(){
    return (
      <div className="hornedBeast">
        {this.props.name}
        
      </div>
    );
   }

}


export default HornedBeast;