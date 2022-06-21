function App() {
  const [time, setTime] = React.useState(25 * 60);
  const [breakTime, setBreakTime] = React.useState(5);
  const [sessionTime, setSessionTime] = React.useState(25);
  const [status, setStatus] = React.useState("pause");

  React.useEffect(() => {
    if (status == "pause") {
      return;
    } else if (status == "play") {
      const interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (status == "break") {
      const interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);

      if (breakTime <= 0) {
        setStatus("play");
      }

      return () => clearInterval(interval);
    }
  }, [status]);

  React.useEffect(() => {
    if (time <= 0 && status == "play") {
      console.log("To Break Time");
      setStatus("break");
      setTime(breakTime * 60);
      playSound();
    }

    if (time <= 0 && status == "break") {
      console.log("To Play Time");
      setStatus("play");
      setTime(sessionTime * 60);
      playSound();
    }
  }, [time]);

  const StartPause = () => {
    if (status == "play") {
      console.log("Status is Now Pause");
      setStatus("pause");
    } else if (status == "pause") {
      console.log("Status is Now Play");
      setStatus("play");
    }
  };

  const Reset = () => {
    console.log("reset");
    setStatus("pause");
    setTime(25 * 60);
    setBreakTime(5);
    setSessionTime(25);
    pauseSound();
  };

  const handleSessionClick = sessionClick => {
    console.log(sessionClick);
    if (status == "pause") {
      if (sessionClick == "increment-session" && sessionTime < 60) {
        setSessionTime(sessionTime + 1);
        setTime((sessionTime + 1) * 60);
      } else if (sessionClick == "decrement-session" && sessionTime > 1) {
        setSessionTime(sessionTime - 1);
        setTime((sessionTime - 1) * 60);
      }
    }
  };

  const handleBreakClick = breakClick => {
    console.log(breakClick);
    if (status == "pause") {
      if (breakClick == "increment-break" && breakTime < 60) {
        setBreakTime(breakTime + 1);
      } else if (breakClick == "decrement-break" && breakTime > 1) {
        setBreakTime(breakTime - 1);
      }
    }
  };

  const playSound = () => {
    let audio = document.getElementById("beep");
    audio.currentTime = 0;
    audio.play();
  };

  const pauseSound = () => {
    let audio = document.getElementById("beep");
    audio.currentTime = 0;
    audio.pause();
  };

  const formatTime = time => {
    let mins = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      (mins < 10 ? "0" + mins : mins) +
      ":" + (
      //If seconds less than 10, make it so seconds will have a zero digit in front, ex. "MINS:09" -> "MINS:08" -> "MINS:07" -> etc.
      seconds < 10 ? "0" + seconds : seconds));

  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "clock-box" }, /*#__PURE__*/
    React.createElement("div", { className: "col-xs-12 col-6 box p-3 rounded", id: "break-box" }, /*#__PURE__*/
    React.createElement("p", { id: "break-label" }, "Break Length:"), /*#__PURE__*/
    React.createElement("div", { id: "break-length" }, breakTime), /*#__PURE__*/
    React.createElement("button", {
      id: "break-increment",
      className: "btn btn-outline-secondary",
      onClick: () => handleBreakClick("increment-break") }, "Increment"), /*#__PURE__*/



    React.createElement("button", {
      id: "break-decrement",
      className: "btn btn-outline-secondary",
      onClick: () => handleBreakClick("decrement-break") }, "Decrement")), /*#__PURE__*/




    React.createElement("div", { className: "col-xs-12 col-6 box p-3 rounded", id: "timer-box" }, /*#__PURE__*/
    React.createElement("p", { id: "timer-label" }, "Status: ", status), /*#__PURE__*/
    React.createElement("p", { id: "time-left" }, formatTime(time)), /*#__PURE__*/
    React.createElement("button", {
      id: "start_stop",
      className: "btn btn-outline-primary",
      onClick: StartPause }, "Start/Stop"), /*#__PURE__*/



    React.createElement("button", { id: "reset", className: "btn btn-outline-primary", onClick: Reset }, "Reset"), /*#__PURE__*/



    React.createElement("h3", null, "About:"), /*#__PURE__*/
    React.createElement("h4", null, "Welcome to the 25+5 Pomodoro Clock! The Pomodoro Technique utilizes a timer to break work into 25 minute intervals, seperated by a 5 minute break. Studies have shown that this time management technique leads to more efficient work habits compared to extensive periods of work."), /*#__PURE__*/





    React.createElement("h3", null, "Instructions:"), /*#__PURE__*/
    React.createElement("h4", null, "Start the timer and work on a task. Once the timer reaches zero, there will be an alarm and you may take a break. Once the break timer reaches zero, the work timer will commence again. Feel free to change the Break Length and Session Length to fit with what works best for you! Reset to default values at any time.")), /*#__PURE__*/







    React.createElement("div", { className: "col-xs-12 col-6 box p-3 rounded", id: "session-box" }, /*#__PURE__*/
    React.createElement("p", { id: "session-label" }, "Session Length:"), /*#__PURE__*/
    React.createElement("p", { id: "session-length" }, sessionTime), /*#__PURE__*/
    React.createElement("button", {
      id: "session-increment",
      className: "btn btn-outline-secondary",
      onClick: () => handleSessionClick("increment-session") }, "Increment"), /*#__PURE__*/



    React.createElement("button", {
      id: "session-decrement",
      className: "btn btn-outline-secondary",
      onClick: () => handleSessionClick("decrement-session") }, "Decrement"), /*#__PURE__*/



    React.createElement("audio", {
      id: "beep",
      src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" }))));




}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));