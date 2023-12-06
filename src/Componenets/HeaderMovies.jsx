import { useState } from 'react';
import { setData } from '../RTK-Store/selectedMovieReducer';
import { useDispatch } from "react-redux";
import HeaderImages from './HeaderImages';

function HeaderMovies(prop) {

    const movies = prop.movies;

    const dispatch = useDispatch();
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="flex gap-3 items-center justify-center w-full">
            {movies.map((movie, index) => (
            <div key={movie.id}
                className={`cursor-pointer relative transition-all duration-300 border-b-4 rounded-b-md
                ${index === currentIndex ? 'brightness-100 scale-105 border-red bottom-3' : 'brightness-50 border-transparent '}`}
                onClick={() => {console.log(movie.id);dispatch(setData(movie.id)); setCurrentIndex(index)}}>
                <HeaderImages style={'h-24 sm:max-w-[3.2rem] object-cover object-center rounded-md'} id={movie.id} />
            </div>
            ))}
        </div>
    );
}

export default HeaderMovies;
