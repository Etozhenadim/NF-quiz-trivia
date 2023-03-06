import './Answers.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Button = styled(Paper)(({ theme }) => ({
    padding: '10px 20px',
    textAlign: 'left',
    cursor: 'pointer',
}));

export const Answers = ({quiz, questionIndex, pickAnswer, selectedAnswer, isCorrectAnswer})=>{

    return (
        <Box sx={{ width: '100%'}}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2}}>
                {quiz[questionIndex].options.map((option) => (
                    <Grid item xs={6}>
                        <Button className='answers-item' sx={{
                            backgroundColor:
                                selectedAnswer && option === selectedAnswer ?
                                    isCorrectAnswer(option)
                                        ? 'green'
                                        : 'red'
                                    : 'blue',
                        }} onClick={(e) => pickAnswer(questionIndex, e)}>
                            {option}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}