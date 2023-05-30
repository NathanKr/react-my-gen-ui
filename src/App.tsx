// import "./App.css";
import Button from "./components/gen-ui/button";
import Select from "./components/gen-ui/select";

function App() {
  function clickHandler() {
    console.log(`clicked : ${new Date()}`);
  }
  return (
    <>
    {/* nesting is possible because children are used */}
      <Button onClick={clickHandler}><span style={{color:'orange'}}>Click</span></Button>
      <p>select car</p>
      <Select onChange={clickHandler} style={{width:'100px'}}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </Select>
    </>
  );
}

export default App;
