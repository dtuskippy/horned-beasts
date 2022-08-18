import React from 'react';
import './footer.css';

class Footer extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render(){
    return (
      <footer>
        <p>{this.props.name}</p>
        <p>{this.props.copyright}</p>
      </footer>
    );
   }

}


export default Footer;