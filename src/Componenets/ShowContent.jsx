import Cast from "./Cast";
import Reviews from "./Reviews";
import Recommendations from "./Recommendations";
import Series from "./Series";

function ShowContent(props) {
    const { id, type, name } = props;
    const movie = `https://multiembed.mov/?video_id=${id}&tmdb=1`;

    return (
        <div>
            {type === 'movie' &&
                <div className="mx-28 my-5 md:mx-5 lg:mx-16">
                    <div className="w-full">
                    <div className="relative py-3 flex items-end justify-between text-white after:w-full after:h-[2px] after:bg-[#ffffff2f] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]">
                        <h2 className="text-xl font-semibold"><i className="fa-solid fa-film mr-2"></i>{name}</h2>
                    </div>
                    <div className="sm:h-[18rem] w-full h-[28rem] flex justify-center mt-4 relative ">
                        <div className="sm:w-full cursor-pointer w-3/4 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                        onClick={()=>{ window.location = movie }}></div>
                        <iframe src={movie} className="sm:w-full w-3/4 h-full cursor-pointer"></iframe>
                    </div>
                    </div>
                    <Cast type={type} id={id} />
                    <Reviews type={type} id={id} />
                    <Recommendations type={type} id={id} />
                </div>
            }
            {type === 'tv' && 
                <div className="mx-28 my-5 md:mx-5 lg:mx-16">
                    <Series id={id} name={name} />
                    <Cast type={type} id={id} />
                    <Reviews type={type} id={id} />
                    <Recommendations type={type} id={id} />
                </div>
            }
        </div>
    )
}

export default ShowContent;