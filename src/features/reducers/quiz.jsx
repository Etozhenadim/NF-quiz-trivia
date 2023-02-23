import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

// Define the fetchData thunk using the createAsyncThunk function
export const fetchData = createAsyncThunk('data/fetchData', async({idCategory, difficulty, number}, thunkAPI) =>{
    console.log(number)
    const response = await axios.get(`https://opentdb.com/api.php?amount=${number}&category=${idCategory}&difficulty=${difficulty}`)
    // Return the data from the API response
    return response.data.results;
})


export const quiz = createSlice({
    name: 'quiz',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {
        fetchDataStart: (state)=>{
            state.isLoading = true;
        },
        fetchDataSuccess:(state, action)=>{
            // Set the data to the payload from the action
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action) =>{
            state.error = action.payload;
            state.isLoading = false;
        }
    },
    // Extra reducers to handle the status of the fetchData thunk
    extraReducers:{
        [fetchData.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [fetchData.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    }
});
// export the actions and reducer
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = quiz.actions;

export default quiz.reducer;