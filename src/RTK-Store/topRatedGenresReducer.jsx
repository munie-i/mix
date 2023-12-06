import { createSlice } from '@reduxjs/toolkit';

const topRatedGenresSlice = createSlice({
  name: 'topRatedGenresSlice',
  initialState: {
    genre: null,
  },
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const { setGenre } = topRatedGenresSlice.actions;
export const selectGenre = (state) => state.topRatedGenres.genre;
export default topRatedGenresSlice.reducer;