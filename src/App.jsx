import './App.css';
import {Quiz} from "./components/Quiz/Quiz";
import {Start} from './components/Start/Start';
import {useState} from "react";

function App() {
    const [start, setStart] = useState(false);
    const [idCategory, setIdCategory] = useState(9)

    return (
        <div className="App" style={{padding: '30px'}}>
            {start ? <Quiz idCategory={idCategory}/> :<Start setStart={setStart} idCategory={idCategory} setIdCategory={setIdCategory}/> }
        </div>
    );
}

export default App;
