import {useQuiz} from "./useQuiz";
import {Finish} from "../Finish/Finish";


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
                    <>

                        <h2 dangerouslySetInnerHTML={{ __html: quiz[currentQuestionIndex]?.question }}></h2>
                        <p>Number of question {currentQuestionIndex}</p>
                        {quiz[currentQuestionIndex].options.map((option) => (
                            <button onClick={(e) => pickAnswer(currentQuestionIndex, e)}>
                                {option}
                            </button>
                        ))}
                        <h1>
                            Points {points} / {quiz.length}
                        </h1>
                    </>
                )
            ) : (
                <Finish points={points} />
            )}
        </div>
    );

};