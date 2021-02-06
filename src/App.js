import logo from "./logo.svg";
import "./App.css";
// import HookApp from "./HookApp";
//import CounterApp from "./components/01-useState/CounterApp";
//import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";
import SimpleForm from './components/02-useEffect/SimpleForm';

function App() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <SimpleForm />
    </>
  );
}

export default App;
