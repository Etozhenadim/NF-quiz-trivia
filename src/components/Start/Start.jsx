import Button from '@mui/material/Button';
import {SelectCategory} from "../Selects/SelectCategory/SelectCategory";
import {SelectDifficulty} from "../Selects/SelectDifficulty/SelectDifficulty";
import {InputNumbers} from "./Input/InputNumbers";



export const Start = ({setStart, idCategory, setIdCategory, difficulty, setDifficulty, number, setNumber})=> {

    return(
        <div>
            <SelectCategory idCategory={idCategory} setIdCategory={setIdCategory}/>
            <SelectDifficulty difficulty={difficulty} setDifficulty={setDifficulty}/>
            <InputNumbers number={number} setNumber={setNumber}/>

            <h1>Click to start the quiz</h1>
            <Button variant="contained" onClick={setStart}>Click here</Button>
        </div>
    )
}