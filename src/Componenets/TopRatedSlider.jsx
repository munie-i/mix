import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectGenre } from "../RTK-Store/topRatedGenresReducer";
import ShowCard from "./ShowCard";

function TopRatedSlider() {
    const key = '10dcb11909dba2b37047d5e65e726b3d';
    const genre = useSelector(selectGenre);
    const [data, setData] = useState([]);
    const [type, setType] = useState();

    useEffect(()=>{
      if (genre === 'movie') {
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&without_genres=16`)
          .then(res=>res.json())
          .then(data=>setData(data.results));
          setType('movie');
      } else if (genre === 'tv') {
          fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${key}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&without_genres=16`)
          .then(res=>res.json())
          .then(data=>setData(data.results));
          setType('tv');
      } else if (genre === 'animation') {
          fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${key}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=16`)
          .then(res=>res.json())
          .then(data=>setData(data.results));
          setType('tv');
      }
  },[genre])

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const touchStartX = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(()=>{
      setActiveIndex(0);
    },[data])

    const getIndex = () => {
        if (windowWidth < 475) {
          return 1;
        } else if (windowWidth <= 725) {
          return 2;
        } else if (windowWidth <= 1000) {
          return 3;
        } else if (windowWidth <= 1225) {
          return 4;
        } else if (windowWidth <= 1400) {
          return 5;
        } else {
          return 6;
        }
    };

    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + (data.length - getIndex())) % (data.length - getIndex()));
    };
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (data.length - getIndex()));
    };

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
        if (touchStartX.current === null) {
            return;
        }
        const touchEndX = e.touches[0].clientX;
        const deltaX = touchEndX - touchStartX.current;
    
        if (deltaX > 5) {
          handlePrev();
        } else if (deltaX < -5) {
          handleNext();
        }
  
        touchStartX.current = null;
    };
    const handleTouchEnd = () => {
        touchStartX.current = null;
    };

    const getValue = () => {
      if (windowWidth < 475) {
        return (data.length / 4) * 10;
      } else if (windowWidth <= 725) {
        return (data.length / 6) * 10;
      } else if (windowWidth <= 1000) {
        return (data.length / 8) * 10;
      } else if (windowWidth <= 1225) {
        return (data.length / 10) * 10;
      } else if (windowWidth <= 1400) {
        return (data.length / 12) * 10;
      } else {
        return (data.length / 14) * 10;
      }
    };

    return (
        <div className="relative mt-4">
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className="relative overflow-hidden">
          <div className="flex items-start"
                style={{ transform: `translateX(-${activeIndex * getValue()}%)` }}>
            {data.map((movie, index) => (
                  <ShowCard key={index} movie={movie} index={index} value={getValue()} type={type} />
              ))}
          </div>
        </div>
          <span className={'md:hidden fa-solid fa-chevron-right text-3xl absolute top-1/2 -right-12 font-semibold text-gray p-2 cursor-pointer transform -translate-y-1/2'}
                onClick={handleNext} />
          <span className={'md:hidden fa-solid fa-chevron-left text-3xl absolute top-1/2 -left-12 font-semibold text-gray p-2 cursor-pointer transform -translate-y-1/2'}
                onClick={handlePrev} />
        </div>
    )
}

export default TopRatedSlider;