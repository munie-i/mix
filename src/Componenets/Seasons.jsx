import Cast from "./Cast";
import Recommendations from "./Recommendations";
import Reviews from "./Reviews";
import { useLocation } from "react-router-dom";
import ShowHeader from "./ShowHeader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Seasons() {
    const location = useLocation();
    const id = location.state.id;
    const season = location.state.season;
    const name = location.state.name;
    const [ep, setEp] = useState([]);
    const key = "10dcb11909dba2b37047d5e65e726b3d";

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&append_to_response=season/${season}`)
        .then(res=>res.json())
        .then(data=>{setEp(data[`season/${season}`].episodes); console.log(data[`season/${season}`].episodes);});
    },[id, season])

    return (
        <>
        <ShowHeader id={id} type={'tv'} />
        <div className="mx-28 my-5 md:mx-5 lg:mx-16">
            <div className="w-full">
                <div className="relative py-3 flex items-end justify-between text-white after:w-full after:h-[2px] after:bg-[#ffffff2f] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]">
                    <h2 className="text-xl font-semibold"><i className="fa-solid fa-film mr-2"></i>{`Season ${season}`}</h2>
                </div>
                <div className="my-4 grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-2">
                {ep.map((movie,index)=>(
                    <div key={index} className={`grid grid-cols-[9.6rem_1fr]`}>
                        <Link to={`/show/${name && name.replace(/ /g, '-')}/s/${season}/e/${movie.episode_number}`} state={{id: id, season: season, episode: movie.episode_number}} className="w-36 h-24">                        
                        <img className={`rounded-md w-36 h-24 object-cover object-center cursor-pointer`} src={`https://image.tmdb.org/t/p/original/${movie.still_path}`} />
                        </Link>
                        <div>
                            <Link to={`/show/${name && name.replace(/ /g, '-')}/s/${movie.season_number}/e/${movie.episode_number}`} state={{id: id, season: season, episode: movie.episode_number}} className="text-white cursor-pointer">{`Episode ${movie.episode_number}`}</Link>
                            <h2 className="text-lightGray text-sm mt-[2px]">{movie.name}</h2>
                            <div className="mt-1 flex flex-wrap items-start justify-start">
                                <h3 className="text-xs text-gray flex items-center relative mr-4 after:w-[2px] after:h-3/6 after:bg-gray after:absolute after:-right-2 after:top-1/2 after:translate-y-[-50%]">
                                    <i className="fa-regular fa-star text-amber-500 mr-1"></i>
                                    {`${Math.round(movie.vote_average)}/10`}
                                </h3>
                                <h3 className="text-xs text-gray mr-4 relative after:w-[2px] after:h-3/6 after:bg-gray after:absolute after:-right-2 after:top-1/2 after:translate-y-[-50%]">
                                    {movie.air_date && movie.air_date.slice(0,4)}
                                </h3>
                                <h3 className="text-xs text-gray">{movie.runtime}m</h3>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
            <Cast type={'tv'} id={id} />
            <Reviews type={'tv'} id={id} />
            <Recommendations type={'tv'} id={id} />
        </div>
        </>
    )
}

export default Seasons;