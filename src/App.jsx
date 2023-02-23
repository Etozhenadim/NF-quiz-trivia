import './App.css';
import {Quiz} from "./components/Quiz/Quiz";
import {Start} from './components/Start/Start';
import {useState} from "react";

function App() {
    const [start, setStart] = useState(false);
    const [idCategory, setIdCategory] = useState(9)
    const [difficulty, setDifficulty] = useState('')
    const [number, setNumber]= useState(10)



    return (
        <div className="App" style={{padding: '30px'}}>
            {start ?
                <Quiz idCategory={idCategory} difficulty={difficulty} number={number}/> :
                <Start setStart={setStart} idCategory={idCategory} setIdCategory={setIdCategory} difficulty = {difficulty} setDifficulty={setDifficulty} number={number} setNumber={setNumber}/> }
        </div>
    );
}

export default App;
