import { useState, useEffect } from 'react';
import ShowCard from './ShowCard';

function Search() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const key = "10dcb11909dba2b37047d5e65e726b3d";

    const handleQuery = (event)=>{
        setQuery(event.target.value)
    }

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${query}&include_adult=false&language=en-US&page=1`)
        .then(res=>res.json())
        .then(data=>setData(data.results))
    },[query])

    const newData = data.filter(({ media_type }) => media_type === 'movie' || media_type === 'tv');

    return (
        <div className="mt-[5.3rem] mx-12 md:mx-7 flex-col">
            <input type="text" placeholder="Search query" 
                className="rounded-md w-full py-3 px-5 bg-transparent border-2 border-gray text-white"
                onChange={handleQuery}/>
            <div className="my-4 grid grid-cols-7 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {newData.map((movie, index) => (
                    <ShowCard key={index} movie={movie} index={index} value={0} type={movie.media_type} />
                ))}
            </div>
        </div>
    )
}

export default Search;