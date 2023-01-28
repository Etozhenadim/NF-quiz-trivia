import { createSlice } from '@reduxjs/toolkit';

export const quiz = createSlice({
    name: 'quiz',
    initialState: [],
    reducers: {
        setQuizData: (state, action) => {
            state.push(...action.payload);
        },
    },
});

export const { setQuizData } = quiz.actions;

export default quiz.reducer;