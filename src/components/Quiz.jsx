import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {fetchData} from "../features/reducers/quiz";


export const Quiz = ()=>{
    const dispatch = useDispatch();
    const data = useSelector(state=> state.quiz.data)
    const isLoading = useSelector(state=>state.quiz.isLoading)
    const error = useSelector(state=> state.quiz.error)

    const [quiz, setQuiz] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [points, setPoints] = useState(0)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch]);

    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    useEffect(()=>{
        setQuiz(data.map(item=>(
            {
                question: item.question,
                options: shuffle([...item.incorrect_answers, item.correct_answer]),
                answer: item.correct_answer
            }
        )))
    }, [data])


    console.log(quiz)
    const pickAnswer = (index, e)=>{
        const pickAnswer= e.target.outerText
        const currentQuestion = quiz[index]

        if(currentQuestion.answer === pickAnswer){
            console.log('true')
            setPoints(points +1)
        }else{
            console.log('false')
        }
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>

            <>
                <h2>{quiz[currentQuestionIndex].question}</h2>
                {quiz[currentQuestionIndex].options.map(option=>(
                    <button onClick={e=>pickAnswer(currentQuestionIndex, e)}>{option}</button>
                ))}
            </>

        </div>
    );
};