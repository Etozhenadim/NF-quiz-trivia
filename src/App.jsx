import './App.css';
import {Quiz} from "./components/Quiz/Quiz";
import {Start} from './components/Start/Start';
import {useState} from "react";

function App() {
    const [start, setStart] = useState(false);

  return (
    <div className="App">
        {start ? <Quiz/> :<Start setStart={setStart}/> }
    </div>
  );
}

export default App;
