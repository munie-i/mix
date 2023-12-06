import Pages from "./Pages";
import SortDropMenu from "./SortDropMenu";
import TVShowContent from "./TVShowContent";

function TVShow() {
  return (
    <div className="mx-28 my-5 md:mx-5 lg:mx-16">
      <div className="w-full">
        <div className="relative py-4 flex items-end justify-between text-white after:w-full after:h-[2px] after:bg-[#ffffff2f] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]">
          <h2 className="text-xl font-semibold">
            TV Show
          </h2>
          <div className="flex items-center">
            <SortDropMenu />
          </div>
        </div>
        <div>
          <TVShowContent />
        </div>
        <div>
          <Pages />
        </div>
      </div>
    </div>
  );
}

export default TVShow;
