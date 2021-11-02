import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import useFetch from '../../custom/useFetch';
const initialState = {
    leagues: [],
    status:'idle',
    //error
}

export const gamesAsync = createAsyncThunk(
    'game/fetchGames',
    // async () => {
    //     const {data} = await useFetch('https://api.pandascore.co/videogames');
    //     console.log('data');
    // return data;
    // }
    async () => {
        const response = await fetch('https://api.pandascore.co/videogames')
        .then((data) => data.json() );
        console.log(response.results);
        return response.results;
    }
)

export const gamesSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        selectGame: (state, action) => {
            console.log(action.payload);
            state.selectedGame =action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(gamesAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            console.log(action.payload);
            state.games = action.payload;
        })
    }
});

export const gamesSelector = (state) => state.games;

export const {selectGame} = gamesSlice.actions;

export default gamesSlice.reducer;