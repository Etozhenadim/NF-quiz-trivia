import {useQuiz} from "./useQuiz";
import {Finish} from "../Finish/Finish";
import {Answers} from "./Answers/Answers";
import {Question} from "./Question/Question";


export const Quiz =({idCategory, difficulty, number})=>{
    const {isLoading, error, quiz, currentQuestionIndex, points, pickAnswer } = useQuiz({idCategory, difficulty, number});

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }



    return (
        <div>
            {currentQuestionIndex < quiz.length - 1 ? (
                quiz[currentQuestionIndex] && (
                 <div>
                     <Question quiz={quiz} points={points} questionIndex={currentQuestionIndex} />
                     <Answers quiz={quiz} questionIndex={currentQuestionIndex} pickAnswer={pickAnswer}/>
                 </div>
                    
                )
            ) : (
                <Finish points={points} />
            )}
        </div>
    );

};