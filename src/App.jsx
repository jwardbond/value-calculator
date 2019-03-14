import React from "react";

import Form from "./Form.jsx";
import Questions from "./Questions.jsx";

import Styles from "./styles/App.css";

class App extends React.Component {
  //STATE -------------------------------------------------------------------
  state = {
    isFormSubmitted: false,
    formContents: []
  };

  //EVENT HANDLING-----------------------------------------------------------
  /*Called in Form.jsx on submit and used to update App.jsx state
  Form contents need to be stored in state here to be passed as props
  to questions*/
  startQuestions = formContents => {
    console.log(formContents);
    let newState = {
      isFormSubmitted: true,
      formContents: formContents
    };
    this.setState(newState);
  };

  //RENDER-------------------------------------------------------------------
  render() {
    let startQuestions = this.startQuestions;
    let isFormSubmitted = this.state.isFormSubmitted;
    let formContents = this.formContents;

    console.log(isFormSubmitted);
    return (
      <div>
        <h1>Value Calculator</h1>
        <Form formSubmit={startQuestions} />
        {isFormSubmitted ? <Questions formContents={formContents} /> : null}
      </div>
    );
  }
}

export default App;
