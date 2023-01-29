import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {fetchData} from "../features/reducers/quiz";




export const Quiz = ()=>{
    const dispatch = useDispatch();
    const data = useSelector(state=> state.quiz.data)
    const isLoading = useSelector(state=>state.quiz.isLoading)
    const error = useSelector(state=> state.quiz.error)

    const [quiz, setQuiz] = useState([])
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

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log(quiz)
    console.log(quiz[0].answer)
    const pickAnswer = (e)=>{
        const pickAnswer= e.target.outerText
        console.log(pickAnswer)
        console.log(quiz[0].answer)
        if(quiz[0].answer === pickAnswer){
            console.log('true')
            setPoints(points +1)
        }else{
            console.log('false')
        }
        console.log(points)
    }

    return (
        <div>
            {quiz.map(item=>(
                <>
                    <h2>{item.question}</h2>
                    <div>
                        {item.options.map(option =>(
                            <button onClick={pickAnswer}>{option}</button>
                        ))}
                    </div>
                </>

                ))}
        </div>
    );
};