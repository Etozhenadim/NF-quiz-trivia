import axios from "axios";
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setQuizData } from '../features/reducers/quiz';

export const Quiz = ()=>{
    const dispatch = useDispatch();

    useEffect(() => {
        axios('https://opentdb.com/api.php?amount=10')
            .then((response) => response.data.results)
            .then((result) => dispatch(setQuizData(result)));
    }, []);


    const quizData = useSelector((state) => state.quiz);

    return (
        <div>
            <ul>
                {quizData.map((question) => (
                    <li key={question.question}>
                        <div>{question.category}</div>
                        <div>{question.correct_answer}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};