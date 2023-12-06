import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHeaderMovies = createAsyncThunk('headerMoviesSlice/fetchHeaderMovies', async()=>{
    const key = '10dcb11909dba2b37047d5e65e726b3d';
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`);
    const data = await res.json();
    return data.results;
})

const headerMoviesSlice = createSlice({
    initialState: [],
    name: 'headerMoviesSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHeaderMovies.fulfilled, (state,action)=>{
            return action.payload;
        })
    }
  })

export default headerMoviesSlice.reducer;