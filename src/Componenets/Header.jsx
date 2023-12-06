import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeaderMovies } from "../RTK-Store/headerMoviesReducer";
import { selectData } from "../RTK-Store/selectedMovieReducer";
import { Link } from 'react-router-dom';
import HeaderMovies from "./HeaderMovies";
import HeaderDetails from "./HeaderDetails";

function Header() {
  
    const dispatch = useDispatch();
    const moviesState = useSelector(state=> state.headerMovies);
    const movieID = useSelector(selectData);

    useEffect(()=>{
      dispatch(fetchHeaderMovies());
    },[])

    const movie = moviesState.map((e) => (
        <div key={e.id} className={`absolute top-0 left-0 w-full h-full flex
            ${e.id === movieID ? 'opacity-100' : 'opacity-0'}`}>
          <img src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`} className="brightness-50 w-full h-full object-cover object-center absolute top-0 left-0" />
          <div className="z-30 mb-10 w-full flex items-center justify-around mx-0 sm:mx-4 md:mx-4">
            <div className="w-[35rem] flex flex-col justify-center md:w-[30rem] sm:w-full">
              <h1 className="text-white leading-snug text-5xl font-meduim mb-2 md:text-4xl sm:text-3xl">{e.title ? e.title : e.name}</h1>
              <HeaderDetails id={e.id} type={'movie'} />
              <p className="text-gray leading-7 md:text-base sm:text-sm w-10/12 mb-3">{e.overview.slice(0, 150)}...</p>
              <Link to={`/show/${e.title ? e.title.replace(/ /g, '-') : e.name.replace(/ /g, '-')}`} state={{id: e.id, type: 'movie'}} className="text-lg sm:text-base flex items-center font-medium shadow-[inset_0_0_6px_0_red] rounded-md w-max text-red border-red border-2 outline-none py-[3px] px-4">
                <i className="fa-solid fa-play mr-2"></i>Play</Link>
            </div>
            <div className="block sm:hidden">
              <img src={`https://image.tmdb.org/t/p/original/${e.poster_path}`} className="w-56 rounded-md" />
            </div>
          </div>
        </div>
      ));

    return (
        <div className="relative w-full h-[44rem] sm:h-[35rem] bg-black flex flex-col">
                <div className="w-full h-full absolute top-0 left-0 z-10" 
                    style={{background: 'radial-gradient(circle, transparent 0%, #191919 85%)'}}></div>
                {movie}
            <div className="z-30 absolute bottom-2 w-full p-4">
                <HeaderMovies movies={moviesState.slice(0,5)} />
            </div>
        </div>
    )
}

export default Header;