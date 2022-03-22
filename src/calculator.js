import React from "react";
import CalculatorTitle from "./CalculatorTitle";
import OutputScreen from "./outputScreen";
import Button from "./Buttons";
import { evaluate } from "mathjs";
class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      question: "",
      answer: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.value;
    console.log(value);
    switch (value) {
      case "=":
        if (this.state.question !== "") {
          var ans = "";
          try {
            ans = evaluate(this.state.question);
          } catch (error) {
            this.setState({ answer: "Math ERROR" });
          }
          if (ans === undefined) {
            this.setState({ answer: "Math ERROR" });
          } else {
            this.setState({ answer: ans });
          }
          break;
        }
        break;
      case "Clear":
        this.setState({ question: "", answer: "" });
        break;
      case "Delete":
        var str = this.state.question;
        str = str.substr(0, str.length - 1);
        this.setState({ question: str });
        break;
      default:
        this.setState((prevState) => ({
          question: prevState.question + value,
        }));
        break;
    }
    console.log(this.state.question);
  }
  render() {
    return (
      <div className="frame">
        <CalculatorTitle value="Calculator" />
        <div className="mainCalc">
          <OutputScreen
            answer={this.state.answer}
            question={this.state.question}
          />
          <div className="button-row">
            <Button label={"Clear"} handleClick={(e) => this.handleClick(e)} />
            <Button label={"Delete"} handleClick={(e) => this.handleClick(e)} />
            <Button label={"."} handleClick={(e) => this.handleClick(e)} />
            <Button label={"/"} handleClick={(e) => this.handleClick(e)} />
          </div>
          <div className="button-row">
            <Button label={"7"} handleClick={(e) => this.handleClick(e)} />
            <Button label={"8"} handleClick={(e) => this.handleClick(e)} />
            <Button label={"9"} handleClick={(e) => this.handleClick(e)} />
            <Button label={"*"} handleClick={(e) => this.handleClick(e)} />
          </div>
          <div className="button-row">
            <Button label={"4"} handleClick={(e) => this.handleClick(e)} />
            <Button label={"5"} handleClick={(e) => this.handleClick(e)} />
            <Button label={"6"} handleClick={(e) => this.handleClick(e)} />
            <Button label={"-"} handleClick={(e) => this.handleClick(e)} />
          </div>
          <div className="button-row">
            <Button label={"1"} handleClick={(e) => this.handleClick(e)} />
            <Button label={"2"} handleClick={(e) => this.handleClick(e)} />
            <Button label={"3"} handleClick={(e) => this.handleClick(e)} />
            <Button label={"+"} handleClick={(e) => this.handleClick(e)} />
          </div>
          <div className="button-row">
            <Button label={"0"} handleClick={(e) => this.handleClick(e)} />
            <Button label={"="} handleClick={(e) => this.handleClick(e)} />
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
