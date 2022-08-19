import React from 'react';
import HornedBeast from './HornedBeast.js'
import '../main.css'
import beastObjects from '../data.json';
import FormX from './FormX.js'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';



class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     beasts: beastObjects
    }
  }

  handleChange = (event) => {
    // do some work ...
    let filter = event.target.value;
    // This is filtering the global data set and re-setting state with that subset
    if(filter === 'All'){
      this.setState({beasts: beastObjects});
    } else {
      let parsedFilter = parseInt(filter);
      let filteredBeasts = beastObjects.filter( n => n.horns === parsedFilter) 
      this.setState({beasts: filteredBeasts});
    }
    
  }


  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("You submitted the form!");
  //  }
   
   
  
  render(){
    return (
      <main className="main">
     
         
       
          <FormX changeHandler={this.handleChange}/>
         
       {
          this.state.beasts.map( (beasty, index) =>
            <HornedBeast beasty={beasty} />
          )
        }
        
        
       

               
      </main>
    );
   }

}







export default Main;