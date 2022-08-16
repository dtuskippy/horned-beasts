import React from 'react';
import App from './App';
import HornedBeast from './HornedBeast.js'
import './main.css'

class Main extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render(){
    return (
      <main className="main">
        <HornedBeast name="Rhino" />
        <HornedBeast name="Ram" />
        
      </main>
    );
   }

}


export default Main;