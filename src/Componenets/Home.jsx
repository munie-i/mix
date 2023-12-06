import PopularDropMenu from "./PopularDropMenu";
import TopRatedDropMenu from "./TopRatedDropMenu";
import PopularSlider from "./PopularSlider";
import TopRatedSlider from "./TopRatedSlider";

function Home() {
    return (
        <div className="mx-28 my-5 md:mx-5 lg:mx-16">
            <div className="w-full">
                <div className="relative py-4 flex items-end justify-between text-white after:w-full after:h-[2px] after:bg-[#ffffff2f] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]">
                    <h2 className="text-xl font-semibold"><i className="fa-solid fa-video mr-2"></i>Popular</h2>
                    <div className="flex items-center">
                        <PopularDropMenu />
                    </div>
                </div>
                <div>
                    <PopularSlider />
                </div>
            </div>
            <div className="w-full mb-5">
                <div className="relative py-4 flex items-end justify-between text-white after:w-full after:h-[2px] after:bg-[#ffffff2f] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]">
                    <h2 className="text-xl font-semibold"><i className="fa-solid fa-arrow-trend-up mr-2"></i>Top rated</h2>
                    <div className="flex items-center">
                        <TopRatedDropMenu />
                    </div>
                </div>
                <div>
                    <TopRatedSlider />
                </div>
            </div>
        </div>
    )
}

export default Home;