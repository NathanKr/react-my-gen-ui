// import "./App.css";
import Button from "./components/gen-ui/button";

function App() {
  return (
    <>
      <Button disabled={false}
        onClick={() => {
          console.log(`clicked : ${new Date()}`);
        }}
      >
        Click
      </Button>
    </>
  );
}

export default App;
