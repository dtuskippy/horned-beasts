import React from 'react';
import { Form } from 'react-bootstrap';



class FormX extends React.Component {

//   // constructor(props) {
//   //   super(props);
  
//   // }

   
  render(){
    return (
      <Form>
         <Form.Control as='select' onChange={this.props.changeHandler}>
          <option value='1'> 1 </option>
          <option value='2'> 2 </option>
          <option value='3'> 3 </option>
          <option value='100'> 100 </option>
          <option value='All'> All </option>
         </Form.Control>
      </Form>
    );
   }

}

// Using the Form component of react-bootstrap, build a drop down menu so that the user can choose to filter by number of horns.
// When the user chooses one of the options, the correct images should be displayed.

export default FormX;



// class OurForm extends React.Component {

//   render() {
//     return (
//       <form onSubmit={this.props.submitHandler}>
//         <Form.Select onChange={this.props.changeHandler}>
//           <option></option>
//           <option>John</option>
//           <option>Jo</option>
//           <option>a</option>
       

//         <Form.Group>
//           <Form.Label>Filter Criteria</Form.Label>
//           <Form.Control type="text" onChange={this.props.changeHandler} />
//         </Form.Group>

//         <button type="submit">Submit the form</button>
//       </form>
//     );
//   }

// }