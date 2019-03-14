import React from "react";

//A modular form for adding or removing input fields
class Form extends React.Component {
  //STATE------------------------------------------------------------------
  state = {
    formContents: [""]
  };

  //EVENT HANDLERS----------------------------------------------------------

  //the input fields are numbered, and when the value of the fields change
  //this function will update the appropriate value in formContents
  handleInputChange = e => {
    e.preventDefault();
    let formContents = [...this.state.formContents];
    formContents[e.target.id] = e.target.value;
    this.setState({ formContents });
  };

  addLine = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        formContents: [...prevState.formContents, ""]
      };
    });
  };

  removeLine = e => {
    e.preventDefault();
    this.setState(prevState => {
      prevState.formContents.pop(); //remove an element
      return {
        formContents: [...prevState.formContents]
      };
    });
  };

  //does two things: 
  //calls the questionStart function in App.jsx
  //passes an array containing the form input
  formSubmit = e => {
    e.preventDefault();
    this.props.formSubmit([...this.state.formContents]);
  };

  //RENDER------------------------------------------------------------------------------------
  render() {
    let { formContents } = this.state;
    let addLine = this.addLine;
    let removeLine = this.removeLine;
    let handleInputChange = this.handleInputChange;
    let formSubmit = this.formSubmit;

    return (
      <form onChange={handleInputChange}>
        {formContents.map((val, indexNum) => {
          return (
            <div key={indexNum}>
              <br />
              <label htmlFor={indexNum}>Value #{indexNum + 1}</label>
              <br />
              <input id={indexNum} type="text" />
              <br />
            </div>
          );
        })}
        <button onClick={addLine} type="button">
          Add Line
        </button>
        <button onClick={removeLine} type="button">
          Remove Line
        </button>
        <button onClick={formSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
