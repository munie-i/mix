import { useState, useEffect } from "react";

function HeaderDetails(props) {
    const { id } = props;

    function convertMinutesToHours(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        let result = '';
        if (hours > 0) {
          result += `${hours}h`;
        }
        if (remainingMinutes > 0) {
          result += ` ${remainingMinutes}m`;
        }
        return result || "0m";
    }

    const key = '10dcb11909dba2b37047d5e65e726b3d';
    const [details, setDetails] = useState([]);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
        .then(res=>res.json())
        .then(data=>setDetails(data));
    }, [])

    const totalMinutes = details.runtime;
    const convertedTime = convertMinutesToHours(totalMinutes);

    const genres = [details.genres];

    return (
        <div className="mb-2 flex items-start justify-start">
            <h3 className="sm:text-sm md:text-base text-lightGray flex items-center relative mr-4 after:w-[2px] after:h-3/6 after:bg-gray after:absolute after:-right-2 after:top-1/2 after:translate-y-[-50%]">
            <i className="fa-regular fa-star text-amber-500 mr-1"></i>
                {`${Math.round(details.vote_average)}/10`}
            </h3>
            <h3 className="sm:text-sm md:text-base text-lightGray mr-4 relative after:w-[2px] after:h-3/6 after:bg-gray after:absolute after:-right-2 after:top-1/2 after:translate-y-[-50%]">
                {genres[0]?.[0].name}
            </h3>
            <h3 className="sm:text-sm md:text-base text-lightGray">{convertedTime}</h3>
      </div>
    )
}

export default HeaderDetails;