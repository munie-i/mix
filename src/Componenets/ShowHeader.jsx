import { useState, useEffect } from "react";

function ShowHeader(props) {

    const { id, type } = props;

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
        return result || "Unknown";
    }

    const key = "10dcb11909dba2b37047d5e65e726b3d";
    const [data, setData] = useState([]);

    useEffect(() => {
        if (type === "tv") {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`)
            .then((res) => res.json())
            .then((data) => setData(data));
        } else if (type === "movie") {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
            .then((res) => res.json())
            .then((data) => setData(data));
        }
    }, [data]);

    const totalMinutes = data.runtime ? data.runtime : data.episode_run_time;
    const convertedTime = convertMinutesToHours(totalMinutes);

    const genres = [data.genres];

    const genreName = genres.length > 0 && genres[0]?.[0]?.name;
    const date = data.release_date
    ? data.release_date.length > 0 && data.release_date.slice(0, 4)
    : data.first_air_date
    ? data.first_air_date.length > 0 && data.first_air_date.slice(0, 4)
    : null;

    const maxMobileWidth = 475;
    const maxDesktopWidth = 1000;
    const maxOverviewLengthMobile = 150;
    const maxOverviewLengthDesktop = 600;
    
    const windowWidth = window.innerWidth;
    const isMobile = windowWidth <= maxMobileWidth;
    const isDesk = windowWidth <= maxDesktopWidth;
    
    const truncatedOverview =
      data.overview &&
      (isMobile
        ? data.overview.slice(0, maxOverviewLengthMobile) + '....'
        : isDesk
        ? data.overview.slice(0, maxOverviewLengthMobile) + '....'
        : data.overview.slice(0, maxOverviewLengthDesktop) + '....');
    
    const [director, setDirector] = useState('');

    const credits = () => {
        if (type === 'tv') {
            const dr = data.created_by && data.created_by.length > 0 && data.created_by[0].name;
            setDirector(dr);
        } else if (type === 'movie') {
            fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`)
                .then(res => res.json())
                .then((data) => {
                    data.crew && data.crew.length > 0 && data.crew
                    .filter(({ job }) => job === 'Director')
                    .map((e) => setDirector(e.name));
            });
        }
    };

    useEffect(() => {
        credits();
    }, [data]);

    return (
        <div className="relative w-full h-[35rem] overflow-hidden">
        <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
            className="absolute top-0 left-32 brightness-50 w-full h-full object-cover object-center z-10 md:left-0"/>
        <div className="w-full h-full absolute top-0 left-32 z-20 md:left-0"
            style={{
            background: "radial-gradient(circle, transparent 0%, #191919 85%)",
            }}></div>
        <div className="w-full h-full absolute top-7 left-0 flex justify-start items-center z-30 pl-32 md:px-[5vw]">
            <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            className="w-64 rounded-md mr-7 md:hidden"
            />
            <div className="flex flex-col items-start w-2/3 md:w-full">
            <h1 className="md:text-4xl sm:text-3xl text-5xl mb-3 text-white font-medium">
                {data.title ? data.title : data.name}
            </h1>
            <div className="mb-1 flex items-start justify-start">
                <h3 className="md:text-md md:text-base text-lightGray flex items-center relative mr-4 after:w-[2px] after:h-3/6 after:bg-gray after:absolute after:-right-2 after:top-1/2 after:translate-y-[-50%]">
                <i className="fa-regular fa-star text-amber-500 mr-1"></i>
                {`${Math.round(data.vote_average)}/10`}
                </h3>
                <h3 className="md:text-md md:text-base text-lightGray mr-4 relative after:w-[2px] after:h-3/6 after:bg-gray after:absolute after:-right-2 after:top-1/2 after:translate-y-[-50%]">
                {genreName}
                </h3>
                <h3 className={`md:text-md md:text-base text-lightGray`}>
                {convertedTime}
                </h3>
            </div>
            {truncatedOverview && <p className="text-gray leading-7 md:text-base w-10/12 mb-3">{truncatedOverview}</p>}
            <div className="grid grid-cols-2 grid-rows-1 w-2/3 md:w-full">
                <div>
                    <h3 className="text-lightGray -mb-[2px]">{director ? director : 'Unknown'}</h3>
                    <h4 className="text-gray text-sm">Created by</h4>
                </div>
                <div>
                    <h3 className="text-lightGray -mb-[2px]">{date}</h3>
                    <h4 className="text-gray text-sm">Release date</h4>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ShowHeader;