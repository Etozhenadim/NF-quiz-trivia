import Button from '@mui/material/Button';
import {SelectCategory} from "./Selects/SelectCategory/SelectCategory";
import {SelectDifficulty} from "./Selects/SelectDifficulty/SelectDifficulty";
import {SelectNumbers} from "./Selects/SelectNumbers/SelectNumbers";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Logo} from "../Logo/Logo";

import './Start.scss'

export const Start = ({setStart, idCategory, setIdCategory, difficulty, setDifficulty, number, setNumber})=> {
    return(
        <Container maxWidth="sm">
            <Logo />
            <Box sx={{
                minWidth: 320,
                maxWidth: 600,
                margin: '0 auto',
                background: 'rgba( 255, 255, 255)',
                boxShadow: '0 8px 32px 0 rgb(31 38 135 / 37%)',
                backdropFilter: 'blur( 1px )',
                borderRadius: 10,
                border: '1px solid rgba( 255, 255, 255, 0.18 )',
                padding: '2rem',
            }}>
                <div className='setup-wrapper'>
                    <p style={{textAlign: 'center'}}>Choose a category and difficulty level to start the game!</p>
                    <div className='divider'>Setup</div>
                    <div className='settings-container'>
                        <SelectCategory idCategory={idCategory} setIdCategory={setIdCategory}/>
                        <SelectDifficulty difficulty={difficulty} setDifficulty={setDifficulty}/>
                        <SelectNumbers number={number} setNumber={setNumber}/>
                        <Button sx={{ width: '100%' }} variant="contained" onClick={setStart}>Start</Button>
                    </div>
                </div>
            </Box>

        </Container>

    )
}