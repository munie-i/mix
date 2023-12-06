import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSort } from "../RTK-Store/sortReducer";
import { selectPage } from "../RTK-Store/pageReducer";
import ShowCard from "./ShowCard";

function MoviesContent() {
    const [data, setData] = useState([]);
    const sort = useSelector(selectSort);
    const page = useSelector(selectPage);
    const key = "10dcb11909dba2b37047d5e65e726b3d";

    useEffect(() => {
        if (sort === 'popular') {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&without_genres=16`)
            .then((res) => res.json())
            .then((data) => setData(data.results));
        } else if (sort === 'top_rated') {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=vote_count.desc&without_genres=16`)
            .then((res) => res.json())
            .then((data) => setData(data.results));
        }
        window.scrollTo(0,0);
    }, [sort, page]);

    return (
        <div className="my-4 grid grid-cols-7 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {data.map((movie, index) => (
                <ShowCard key={index} movie={movie} index={index} value={0} type={'movie'} />
            ))}
        </div>
    )
}

export default MoviesContent;
