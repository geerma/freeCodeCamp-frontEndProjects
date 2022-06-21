function Calculator() {
  const operators = ["/", "*", "+", "-"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const [displayString, setDisplayString] = React.useState("Current Number");
  const [currentNumber, setCurrentNumber] = React.useState("0");
  const [numberList, setNumberList] = React.useState("");

  const handleNumberClick = value => {
    console.log(value);

    //Save previous answer to allow to consecutive calculations
    if (displayString === "Answer") {
      setDisplayString("Current Number");
      setNumberList(numberList => currentNumber);
    }

    //No double decimals in a number
    if (value === "." && currentNumber.includes(".")) {
      console.log("Period");
      return;
    }

    setCurrentNumber(currentNumber => currentNumber + value);

    if (operators.includes(value) || currentNumber === "0") {
      setCurrentNumber(value);

      //Dealing with double operator
      if (operators.includes(currentNumber)) {
        console.log("Double Operator");
        var lastChar = numberList.charAt(numberList.length - 1);
        var secondLastChar = numberList.charAt(numberList.length - 2);

        setCurrentNumber(value);

        //For 5*-+5, will delete operations other than last operation
        if (lastChar === "-" && !numbers.includes(secondLastChar)) {
          console.log("Last was Negative");
          setNumberList(numberList => numberList.slice(0, -2) + value);
          return;
        }

        if (value === "-") {
          console.log("Double Operator - Negative");
          setNumberList(numberList => numberList + value);

          if (operators.includes(secondLastChar)) {
            setNumberList(numberList => numberList.slice(0, -2) + value);
          }
          return;
        }

        console.log("test:" + secondLastChar, lastChar);
        setNumberList(numberList => numberList.slice(0, -1) + value);
        return;
      }
    }

    setNumberList(numberList => numberList + value);
  };

  //Using as alternate to eval(string);
  function evaluateFunction(fn) {
    var tempAnswer = new Function("return " + fn)();
    return tempAnswer;
  }

  const evaluate = () => {
    console.log(evaluateFunction(numberList));
    console.log(["red", "green"].includes("red"));
    setCurrentNumber(evaluateFunction(numberList));
    setNumberList(
    numberList => numberList + "=" + evaluateFunction(numberList));

    setDisplayString("Answer");
  };

  // Reset the calculator
  const Reset = () => {
    setCurrentNumber("0");
    setNumberList("");
    setDisplayString("Current Number");
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "calculator" }, /*#__PURE__*/
    React.createElement("div", { class: "Display" }, /*#__PURE__*/
    React.createElement("h4", { className: "number-list" }, "Numbers: ", numberList), /*#__PURE__*/

    React.createElement("h4", { className: "display-string" }, displayString, ":"), /*#__PURE__*/
    React.createElement("h4", { className: "current-number", id: "display" },
    currentNumber)), /*#__PURE__*/



    React.createElement("div", { className: "AC" }, /*#__PURE__*/
    React.createElement("button", {
      className: "btn btn-AC block",
      id: "clear",
      value: "AC",
      onClick: () => Reset() }, "AC")), /*#__PURE__*/





    React.createElement("div", { className: "operators" }, /*#__PURE__*/
    React.createElement("button", {
      className: "btn btn-operators",
      id: "divide",
      value: "/",
      onClick: () => handleNumberClick(`/`) }, "/"), /*#__PURE__*/



    React.createElement("button", {
      className: "btn btn-operators",
      id: "multiply",
      value: "*",
      onClick: () => handleNumberClick("*") }, "x"), /*#__PURE__*/



    React.createElement("button", {
      className: "btn btn-operators",
      id: "subtract",
      value: "-",
      onClick: () => handleNumberClick("-") }, "-"), /*#__PURE__*/



    React.createElement("button", {
      className: "btn btn-operators",
      id: "add",
      value: "+",
      onClick: () => handleNumberClick("+") }, "+")), /*#__PURE__*/





    React.createElement("div", { className: "numbers" }, /*#__PURE__*/
    React.createElement("button", {
      className: "btn btn-secondary",
      id: "seven",
      value: "7",
      onClick: () => handleNumberClick("7") }, "7"), /*#__PURE__*/



    React.createElement("button", {
      className: "btn btn-secondary",
      id: "eight",
      value: "8",
      onClick: () => handleNumberClick("8") }, "8"), /*#__PURE__*/



    React.createElement("button", {
      className: "btn btn-secondary",
      id: "nine",
      value: "9",
      onClick: () => handleNumberClick("9") }, "9"), /*#__PURE__*/



    React.createElement("button", {
      className: "btn btn-secondary",
      id: "four",
      value: "4",
      onClick: () => handleNumberClick("4") }, "4"), /*#__PURE__*/



    React.createElement("button", {
      className: "btn btn-secondary",
      id: "five",
      value: "5",
      onClick: () => handleNumberClick("5") }, "5"), /*#__PURE__*/



    React.createElement("button", {
      className: "btn btn-secondary",
      id: "six",
      value: "6",
      onClick: () => handleNumberClick("6") }, "6"), /*#__PURE__*/



    React.createElement("button", {
      className: "btn btn-secondary",
      id: "one",
      value: "1",
      onClick: () => handleNumberClick("1") }, "1"), /*#__PURE__*/



    React.createElement("button", {
      className: "btn btn-secondary",
      id: "two",
      value: "2",
      onClick: () => handleNumberClick("2") }, "2"), /*#__PURE__*/



    React.createElement("button", {
      className: "btn btn-secondary",
      id: "three",
      value: "3",
      onClick: () => handleNumberClick("3") }, "3")), /*#__PURE__*/





    React.createElement("div", { className: "zero" }, /*#__PURE__*/
    React.createElement("button", {
      className: "btn btn-secondary block",
      id: "zero",
      value: "0",
      onClick: () => handleNumberClick("0") }, "0")), /*#__PURE__*/




    React.createElement("div", { className: "decimal" }, /*#__PURE__*/
    React.createElement("button", {
      className: "btn btn-secondary block",
      id: "decimal",
      value: ".",
      onClick: () => handleNumberClick(".") }, ".")), /*#__PURE__*/




    React.createElement("div", { className: "equals" }, /*#__PURE__*/
    React.createElement("button", {
      className: "btn btn-equals block",
      id: "equals",
      value: "=",
      onClick: () => evaluate() }, "="))));






}

ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("app"));