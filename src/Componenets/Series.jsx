import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Series(props) {
    const {id, name} = props;
    const [series, setSeries] = useState([]);
    const key = "10dcb11909dba2b37047d5e65e726b3d";

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`)
        .then(res=>res.json())
        .then(data=>{setSeries(data.seasons);})
    },[id])

    return (
        <div className="w-full">
            <div className="relative py-3 flex items-end justify-between text-white after:w-full after:h-[2px] after:bg-[#ffffff2f] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]">
                <h2 className="text-xl font-semibold"><i className="fa-solid fa-film mr-2"></i>{name}</h2>
            </div>
            <div className="my-4 grid grid-cols-7 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {series.map((movie,index)=>(
                    <div key={index} className={`relative flex flex-col items-start box-border p-2 text-left ${movie.season_number === 0 && 'hidden'}`}>
                        <Link to={`/show/${name && name.replace(/ /g, '-')}/s/${movie.season_number}`} state={{name: name, id: id, season: movie.season_number}}>
                        <img className={`rounded-md w-full`} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                        </Link>
                        <Link to={`/show/${name && name.replace(/ /g, '-')}/s/${movie.season_number}`} state={{name: name, id: id, season: movie.season_number}} className="text-white mt-2">{movie.name}</Link>
                        <h3 className="text-gray">{movie.air_date && movie.air_date.slice(0,4)}</h3>
                </div>))}
            </div>
        </div> 
    )
}

export default Series;