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
      // <main className="main">
        <HornedBeast title={"UniWhal"} img_url={"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"} description={beastObjects[0].description} />
        
        
        
      // </main>
    );
   }

}


export default Main;