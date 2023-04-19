import './Answers.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

//write fetch to get data from API
const Button = styled(Paper)(({  }) => ({
    padding: '10px 20px',
    textAlign: 'left',
    cursor: 'pointer',
}));

export const Answers = ({quiz, questionIndex, pickAnswer, selectedAnswer, isCorrectAnswer})=>{

    const answerColors = (option, questionIndex) => {
        if (selectedAnswer) {
            if (option === quiz[questionIndex].answer) {
                return isCorrectAnswer(option) ? 'green' : 'red';
            } else if (option === selectedAnswer) {
                return 'red';
            }
        }
        return 'white';
    };

    return (
        <Box sx={{ width: '100%'}}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2}}>
                {quiz[questionIndex].options.map((option) => (
                    <Grid item xs={6} key={option}>
                        <Button className='answers-item' sx={{
                            backgroundColor: answerColors(option, questionIndex),
                        }} onClick={(e) => pickAnswer(questionIndex, e)}>
                            {option}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};