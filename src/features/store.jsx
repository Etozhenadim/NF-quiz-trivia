import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './reducers/quiz';
import categoriesReducer from "./reducers/categories";

const store = configureStore({
    reducer: {
        quiz: quizReducer,
        categories: categoriesReducer,
    },
});

export default store;