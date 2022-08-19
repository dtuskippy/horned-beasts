import React from 'react';
import '../hornedBeast.css';
 


class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      heartCount: 0
    }
  
  
  }

  

  increment = (e) => {

    let nextState = {
      heartCount: this.state.heartCount + 1
    }
    this.setState(nextState);
  }

  render(){
    return (
      <div className="hornedBeast">
       <h2>{this.props.beasty.title}</h2>
       <h3>Hearts = {this.state.heartCount}</h3>
       <p>{this.props.beasty.description}</p>
       <img src={this.props.beasty.image_url} alt={this.props.beasty.title} width="350" onClick={this.increment} />
      </div>
    );
   }

}


export default HornedBeast;