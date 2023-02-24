import './App.css';
import {Quiz} from "./components/Quiz/Quiz";
import {Start} from './components/Start/Start';
import {useState} from "react";
import Container from "@mui/material/Container";

function App() {
    const [start, setStart] = useState(false);
    const [idCategory, setIdCategory] = useState(9)
    const [difficulty, setDifficulty] = useState('')
    const [number, setNumber]= useState(10)



    return (

            <Container className="App" style={{padding: '30px'}} maxWidth="lg">
                {start ?
                    <Quiz idCategory={idCategory} difficulty={difficulty} number={number}/> :
                    <Start setStart={setStart} idCategory={idCategory} setIdCategory={setIdCategory} difficulty = {difficulty} setDifficulty={setDifficulty} number={number} setNumber={setNumber}/> }
            </Container>


    );
}

export default App;
