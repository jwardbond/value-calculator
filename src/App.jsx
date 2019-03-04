import React from "react";

import Form from "./Form.jsx";
import Questions from "./Questions.jsx";

import Styles from "./styles/App.css";

class App extends React.Component {
  
  //STATE -------------------------------------------------------------------
  state = {
    isFormSubmitted: false,
    formContents: []
  }

  //EVENT HANDLING-----------------------------------------------------------
  handleFormSubmit = e => {
    console.log(this.state);
    this.setState({ isFormSubmitted: true });
  }

  //RENDER-------------------------------------------------------------------
  render() {
    let handleFormSubmit = this.handleFormSubmit;
    let isFormSubmitted = this.state.isFormSubmitted;
    console.log(isFormSubmitted);
    return (
      <div>
        <h1>Value Calculator</h1>
        <Form formSubmit={handleFormSubmit} valueArray={""} />
        {/* {isFormSubmitted ? <Questions /> : null} */}
      </div>
    );
  }
}

export default App;
