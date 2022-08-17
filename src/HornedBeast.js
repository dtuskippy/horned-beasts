import React from 'react';
import './hornedBeast.css';



class HornedBeast extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render(){
    return (
      <div className="hornedBeast">
       <h2>{this.props.title}</h2>
       <p>{this.props.description}</p>
       <img src={this.props.img_url} alt="Horned Beast" />
        
      </div>
    );
   }

}


export default HornedBeast;