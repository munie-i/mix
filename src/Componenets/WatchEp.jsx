import Cast from "./Cast";
import Recommendations from "./Recommendations";
import Reviews from "./Reviews";
import ShowHeader from "./ShowHeader";
import { useLocation } from "react-router-dom";

function WatchEp() {
    const location = useLocation();
    const { id ,season, episode } = location.state;
    const ep = ` https://multiembed.mov/?video_id=${id}&tmdb=1&s=${season}&e=${episode}`;
    return (
        <>
        <ShowHeader id={id} type={'tv'} />
        <div className="mx-28 my-5 md:mx-5 lg:mx-16">
            <div className="w-full">
                <div className="relative py-3 flex items-end justify-between text-white after:w-full after:h-[2px] after:bg-[#ffffff2f] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]">
                    <h2 className="text-xl font-semibold"><i className="fa-solid fa-film mr-2"></i>{`Season ${season} Episode ${episode}`}</h2>
                </div>
                <div className="sm:h-[18rem] w-full h-[28rem] flex justify-center mt-4 relative ">
                    <div className="sm:w-full cursor-pointer w-3/4 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                        onClick={()=>{ window.location = ep }}></div>
                    <iframe src={ep} className="sm:w-full w-3/4 h-full cursor-pointer"></iframe>
                </div>
            </div>
            <Cast type={'tv'} id={id} />
            <Reviews type={'tv'} id={id} />
            <Recommendations type={'tv'} id={id} />
        </div>
        </>
    )
}

export default WatchEp;