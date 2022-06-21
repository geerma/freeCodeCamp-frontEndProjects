const bankOne = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



const bankTwo = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Chord-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Chord-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Chord-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Shaker",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Punchy-Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Side-Stick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Snare",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }];



function App() {
  //Changing which Bank is used in .map
  const [bank, setBank] = React.useState("bankOne");
  const [whichOne, setwhichOne] = React.useState(bankOne);
  const [display, setDisplay] = React.useState("Play any Sound");

  const changeBank = e => {
    if (bank == "bankOne") {
      setBank("bankTwo");
      setwhichOne(bankTwo);
    } else {
      setBank("bankOne");
      setwhichOne(bankOne);
    }
    console.log(whichOne);
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "text-center", id: "drum-machine" }, /*#__PURE__*/
    React.createElement("h1", null, "Drum Machine"), /*#__PURE__*/
    React.createElement("div", { id: "pad-container" },
    whichOne.map((sound) => /*#__PURE__*/
    React.createElement(Pad, { sound: sound, setDisplay: setDisplay }))), /*#__PURE__*/


    React.createElement("div", { id: "controls-container" }, /*#__PURE__*/
    React.createElement("div", { id: "display" }, "Description: ", display), /*#__PURE__*/
    React.createElement("div", { className: "btn btn-secondary p-3 m-1", onClick: changeBank },
    bank)))));





}

function Pad({ sound, setDisplay }) {
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = event => {
    if (event.keyCode === sound.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    let audio = document.getElementById(sound.keyTrigger);
    audio.currentTime = 0;
    audio.play();
    setDisplay(sound.id);
  };

  return /*#__PURE__*/(
    React.createElement("div", {
      className: "btn btn-primary p-5 m-3 drum-pad",
      id: sound.id,
      onClick: playSound },

    sound.keyTrigger, /*#__PURE__*/
    React.createElement("audio", { src: sound.url, id: sound.keyTrigger, className: "clip" })));


}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));