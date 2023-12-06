import { useEffect, useState } from "react";

function Cast(props) {
    const [cast, setCast] = useState([]);
    const { type, id } = props;
    const key = "10dcb11909dba2b37047d5e65e726b3d";

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${key}&language=en-US`)
        .then(res=>res.json())
        .then(data=>setCast(data.cast));
    },[id])

    return (
        <div className="w-full mt-5">
        <div className="relative py-3 flex items-end justify-between text-white after:w-full after:h-[2px] after:bg-[#ffffff2f] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]">
            <h2 className="text-xl font-semibold"><i className="fa-solid fa-user-group mr-2"></i>Cast</h2>
        </div>
        <div id="id" className="w-full mt-4 flex relative overflow-x-scroll snap-x">
            {cast.map((e)=>(
                <div key={e.id} className="p-2 pt-0 min-w-[144px] snap-center">
                    <img className="rounded-md w-32" src={`https://image.tmdb.org/t/p/original/${e.profile_path}`} />
                    <h3 className="text-white mt-2">{e.name}</h3>
                    <h4 className="text-gray">{e.character}</h4>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Cast;