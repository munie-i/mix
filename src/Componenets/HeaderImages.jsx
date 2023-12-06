import { useState, useEffect } from "react";

function HeaderImages(props) {
    const { style, id } = props;

    const key = '10dcb11909dba2b37047d5e65e726b3d';
    const [imgs, setImgs] = useState([]);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${key}`)
        .then(res=>res.json())
        .then(data=>{setImgs(data.backdrops[1])})
    },[]);

    return (
        <img src={`https://image.tmdb.org/t/p/original/${imgs.file_path}`} className={`${style}`} />
    )
}

export default HeaderImages;