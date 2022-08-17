import React from 'react';
import HornedBeast from './HornedBeast.js'
import './main.css'
import beastObjects from './data.json';


class Main extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  
   render(){
    return (
      <main className="main">
        {
        beastObjects.map( (beasty, index) =>
        <HornedBeast beasty={beasty} />
        )
        }
        
      </main>
    );
   }

}


export default Main;