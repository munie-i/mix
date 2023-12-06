import { createSlice } from '@reduxjs/toolkit';
const key = '10dcb11909dba2b37047d5e65e726b3d';

const promiseA = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`)
.then(res=>res.json())
.then(data=>{return data.results[0].id});

const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState: {
    data: await promiseA,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = selectedMovieSlice.actions;
export const selectData = (state) => state.selectedMovie.data;
export default selectedMovieSlice.reducer;