import { useEffect, useState } from "react";

function Reviews(props) {
    const [review, setReview] = useState([]);
    const { type, id } = props;
    const key = "10dcb11909dba2b37047d5e65e726b3d";

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${key}&language=en-US`)
        .then(res=>res.json())
        .then(data=>setReview(data.results));
    },[id])

    return (
        <div className="w-full mt-5">
        <div className="relative py-3 flex items-end justify-between text-white after:w-full after:h-[2px] after:bg-[#ffffff2f] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]">
            <h2 className="text-xl font-semibold"><i className="fa-regular fa-eye mr-2"></i>Reviews</h2>
        </div>
        <div id="id" className="w-full mt-4 flex relative overflow-x-scroll snap-x">
            {review.map((e)=>(
                <div key={e.id} className="p-2 pt-0 min-w-full grid grid-rows-[80px_1fr] grid-cols-[80px_1fr] snap-center">
                    <img className="rounded-full w-16 h-16 mr-3 mt-2" src={`https://image.tmdb.org/t/p/original/${e.author_details.avatar_path}`} />
                        <div className="flex w-full flex-col items-start">
                            <h3 className="text-white mt-4 text-xl">{e.author}</h3>
                            <h4 className="text-lightGray mt-1 mr-3">
                            <i className="fa-regular fa-star text-amber-500 mr-1"></i>
                                {e.author_details.rating}/10
                            </h4>
                        </div>
                    <p className="text-gray break-words p-1 row-start-2 row-end-3 col-start-1 col-end-3">{e.content.length > 1000 ? e.content.slice(0,1000)+'....' : e.content}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Reviews;