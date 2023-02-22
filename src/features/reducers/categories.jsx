import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

// Define the fetchData thunk using the createAsyncThunk function
export const fetchCategories = createAsyncThunk('data/fetchCategories', async(payload, thunkAPI) =>{
    const response = await axios.get('https://opentdb.com/api_category.php')
    // Return the data from the API response
    return response.data.trivia_categories;
})


export const categories = createSlice({
    name: 'categories',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {
        fetchCategoriestart: (state)=>{
            state.isLoading = true;
        },
        fetchCategoriesSuccess:(state, action)=>{
            // Set the data to the payload from the action
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        fetchCategoriesFailure: (state, action) =>{
            state.error = action.payload;
            state.isLoading = false;
        }
    },
    // Extra reducers to handle the status of the fetchData thunk
    extraReducers:{
        [fetchCategories.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [fetchCategories.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    }
});
// export the actions and reducer
export const { fetchCategoriesStart, fetchCategoriesSuccess, fetchDataFailure } = categories.actions;

export default categories.reducer;