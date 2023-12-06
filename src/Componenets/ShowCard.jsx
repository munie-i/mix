import { useState } from "react";
import { Link } from "react-router-dom";

function ShowCard(props) {
    const { movie, index, value, type } = props;
    const [hover, setHover] = useState(false);
    const link = `/show/${movie.title ? movie.title.replace(/ /g, '-') : movie.name.replace(/ /g, '-')}`;

    return (
        <div key={index} className={`relative flex flex-col items-start box-border p-2 text-left`}
            style={{ flex: `0 0 ${value}%`}}>
            <Link to={link} state={{id: movie.id, type: type}} className={`fa-solid fa-play z-30 cursor-pointer text-red ${hover ? 'opacity-100' : 'opacity-0'} text-4xl absolute top-[41%] left-1/2 -translate-x-1/2 -translate-y-[41%]`}
                onMouseEnter={()=>{ setHover(true) }}
                onMouseLeave={()=>{ setHover(false) }}></Link>
            <div className="overflow-hidden">
            <img className={`rounded-md w-full ${hover ? 'scale-110 brightness-50' : 'scale-100 brightness-100' }`} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                onMouseEnter={()=>{ setHover(true) }}
                onMouseLeave={()=>{ setHover(false) }}/>
            </div>
            <Link to={link} state={{id: movie.id, type: type}}
                className="text-white mt-2">{movie.title ? movie.title.length < 25 ? movie.title : movie.title.slice(0,25)+'...' : movie.name.length < 25 ? movie.name : movie.name.slice(0,25)+'...' }</Link>
            <h3 className="text-gray">{movie.release_date ? movie.release_date.slice(0,4) : movie.first_air_date && movie.first_air_date.slice(0,4)}</h3>
        </div>
    )
}

export default ShowCard;