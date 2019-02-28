import React from "react";
import Styles from "./styles/App.css";
import Form from "./Form.jsx";

// This component is mainly responsible for handling the layout and overall structure
class App extends React.Component {

  // handleFormSubmit = (e) =>{
    
  // };

  render() {

    return (
      <div>
        <h1>Value Calculator</h1>
        <Form />
      </div>
    );
  }
}

export default App;
