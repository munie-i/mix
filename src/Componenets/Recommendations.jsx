import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";

function Recommendations(props) {
    const [recommendations, setRecommendations] = useState([]);
    const { type, id } = props;
    const key = "10dcb11909dba2b37047d5e65e726b3d";

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${key}&language=en-US`)
        .then(res=>res.json())
        .then(data=>setRecommendations(data.results.slice(0,6)));
    },[id])

    return (
        <div className="w-full mt-5">
        <div className="relative py-3 flex items-end justify-between text-white after:w-full after:h-[2px] after:bg-[#ffffff2f] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]">
            <h2 className="text-xl font-semibold">Recommendations</h2>
        </div>
        <div className="my-4 grid grid-cols-7 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {recommendations.map((movie, index) => (
                <ShowCard key={index} movie={movie} index={index} value={0} type={type} />
            ))}
        </div>
        </div>
    )
}

export default Recommendations;