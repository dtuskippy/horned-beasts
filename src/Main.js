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
        <HornedBeast title="Ram" description="Ram looking at camera" />
        <HornedBeast title="Rhino" description="Rhino looking fierce"/>
        
      </main>
    );
   }

}


export default Main;