import React from "react";

//A modular form for adding or removing values
class Form extends React.Component {
  

  //STATE------------------------------------------------------------------
  state = {
    inputArr: [""]
  };

  //EVENT HANDLERS----------------------------------------------------------

  //the input fields are numbered, and when the value of the fields change
  //this function will update the appropriate value in inputArr
  handleInputChange = (e) => {
    e.preventDefault();
    let inputArr = [...this.state.inputArr];
    inputArr[e.target.id] = e.target.value;
    this.setState({inputArr})
  }

  addLine = e => {
    e.preventDefault();
    this.setState(prevState => {
      return ({
        inputArr: [...prevState.inputArr, ""]
      });
    });
  };

  removeLine = e => {
    e.preventDefault();
    this.setState(prevState => {
      prevState.inputArr.pop(); //remove an element
      return ({
        inputArr: [...prevState.inputArr]
      });
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("formsubmit");
  }

  //RENDER------------------------------------------------------------------------------------
  render() {
    let { inputArr } = this.state;
    let addLine = this.addLine;
    let removeLine = this.removeLine;
    let handleInputChange = this.handleInputChange;
    let handleSubmit = this.handleSubmit;

    return (
      <form onChange={handleInputChange}>
        {
        inputArr.map((val, indexNum) => {
          return (
            <div key={indexNum}>
              <br />
              <label htmlFor={indexNum}>Value #{indexNum+1}</label>
              <br />
              <input id={indexNum} type="text" />
              <br />
            </div>
          );
        })}
        <button onClick={addLine} type="button">Add Line</button>
        <button onClick={removeLine} type="button">Remove Line</button>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
