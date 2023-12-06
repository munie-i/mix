import { createSlice } from '@reduxjs/toolkit';

const popularGenresSlice = createSlice({
  name: 'popularGenresSlice',
  initialState: {
    genre: null,
  },
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const { setGenre } = popularGenresSlice.actions;
export const selectGenre = (state) => state.popularGenres.genre;
export default popularGenresSlice.reducer;