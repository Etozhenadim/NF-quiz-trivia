import {useQuiz} from "./useQuiz";
import {Finish} from "../Finish/Finish";
import {Answers} from "./Answers/Answers";
import {Question} from "./Question/Question";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


export const Quiz =({idCategory, difficulty, number})=>{
    const {isLoading, error, quiz, currentQuestionIndex, points, pickAnswer,  nextQuestion, isCorrectAnswer,selectedAnswer } = useQuiz({idCategory, difficulty, number});

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Container maxWidth="lg">
            <Box sx={{display: 'flex', flexDirection: 'flex-column',}}>
                {currentQuestionIndex < quiz.length - 1 ? (
                    quiz[currentQuestionIndex] && (
                        <div style={{width: '100%'}}>
                            <Question quiz={quiz} points={points} questionIndex={currentQuestionIndex} />
                            <Answers quiz={quiz} questionIndex={currentQuestionIndex} pickAnswer={pickAnswer} selectedAnswer={selectedAnswer} isCorrectAnswer={isCorrectAnswer}/>
                            <button onClick={nextQuestion} disabled={selectedAnswer ? false : true} >Next Question</button>
                        </div>
                    )
                ) : (
                    <Finish points={points} />
                )}
            </Box>
        </Container>

    );

};