import ShowHeader from "./ShowHeader";
import ShowContent from "./ShowContent";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Show() {

    const location = useLocation();
    const id = location.state.id;
    const type = location.state.type;

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

    return (
        <>
        <ShowHeader id={id} type={type} />
        <ShowContent type={type} id={id} name={data.title ? data.title : data.name} />
        </>
    );
}

export default Show;
