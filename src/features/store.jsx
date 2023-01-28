import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './reducers/quiz';

const store = configureStore({
    reducer: {
        quiz: quizReducer,
    },
});

export default store;