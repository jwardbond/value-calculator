import React from "react";

//A modular form for adding or removing values
class Form extends React.Component {
  state = {
    valueArr: ["", ""]
  };

  addLine = e => {
    e.preventDefault();
    console.log("Pressed");
    this.setState(prevState => {
      return ({
        valueArr: [...prevState.valueArr, ""]
      });
    });
  };

  removeLine = e => {
    e.preventDefault();
    console.log("Pressed");
    this.setState(prevState => {
      prevState.valueArr.pop(); //remove an element
      return ({
        valueArr: [...prevState.valueArr]
      });
    });
  };

  render() {
    let { valueArr } = this.state;
    let addLine = this.addLine;
    let removeLine = this.removeLine;

    return (
      <form>
        {//The dynamically added fields
        valueArr.map((val, indexNo) => {
          let fieldNo = indexNo + 1;
          return (
            <div key={fieldNo}>
              <br />
              <label htmlFor={fieldNo}>Value #{fieldNo}</label>
              <br />
              <input type="text" />
              <br />
            </div>
          );
        })}
        <button onClick={addLine}>Add Line</button>
        <button onClick={removeLine}>Remove Line</button>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
