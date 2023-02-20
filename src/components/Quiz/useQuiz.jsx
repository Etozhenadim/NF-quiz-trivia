import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../features/reducers/quiz";


export const useQuiz=()=>{
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
        if (data && data.length > 0) {
            setQuiz(data.map(item=>(
                {
                    question: item.question,
                    options: shuffle([...item.incorrect_answers, item.correct_answer]),
                    answer: item.correct_answer
                }
            )))
        }
    }, [data])


    const pickAnswer = (index, e)=>{
        const pickAnswer= e.target.outerText
        const currentQuestion = quiz[index]

        if(currentQuestion.answer === pickAnswer){
            setPoints(points +1)
        }
        if (currentQuestionIndex + 1 < quiz.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }

    }

    return {
        isLoading,
        error,
        quiz,
        currentQuestionIndex,
        points,
        pickAnswer,
    }
}