import { useState } from "react";
import { setPage } from "../RTK-Store/pageReducer";
import { useDispatch } from "react-redux";

function Pages() {
    const [pages, setPages] = useState([1, 2, 3, 4]);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    const handleButtonClick = (clickedButton) => {
      const nextpages = Array.from({ length: 300 }, (_, index) => index + 1)
        .slice(clickedButton - 2, clickedButton + 2);
      setPages(nextpages);
    };

    return (
        <div className="flex w-full items-center justify-between">
            <button className={`bg-transparent border-2 border-gray text-gray font-bold py-1 px-3 rounded-md`}
                onClick={()=>{
                    handleButtonClick(2);
                    setCurrentPage(1);
                    dispatch(setPage(1))
                }}>
                First
            </button>
            <div>
            {pages.map((pageNum) => (
            <button key={pageNum}
                className={`text-sm mr-2 sm:mr-1 last:mr-0 hover:text-white hover:bg-red hover:border-transparent font-bold sm:w-8 sm:h-8 w-9 h-9 rounded-full
                    ${currentPage === pageNum ? 'bg-red text-white border-transparent' : 'bg-transparent border-2 border-gray text-gray' }`}
                onClick={() => {
                    handleButtonClick(pageNum > 1 ? pageNum : 2);
                    setCurrentPage(pageNum);
                    dispatch(setPage(pageNum))
                }}>
                {pageNum}
            </button>
            ))}
            </div>
            <button className={`bg-transparent border-2 border-gray text-gray font-bold py-1 px-3 sm:px-2 rounded-md`}
                onClick={()=>{
                    handleButtonClick(300);
                    setCurrentPage(300);
                    dispatch(setPage(300))
                }}>
                Last
            </button>
      </div>
    )
}

export default Pages;