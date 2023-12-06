import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGenre } from "../RTK-Store/topRatedGenresReducer";

function TopRatedDropMenu() {
  const [selectedGenre, setSelectedGenre] = useState('movie');
  const [menuClicked, setMenuClicked] = useState(false);
  const dispatch = useDispatch();

  const genres = [
    { id: 1, title: "Movies", name: "movie"},
    { id: 2, title: "TV Show", name: "tv"},
    { id: 3, title: "Animation", name: "animation"},
  ];

  useEffect(()=>{
    dispatch(setGenre(selectedGenre))
  },[selectedGenre])

  const activeGenre = genres.map((e) => {
    return (<h3 className="absolute left-2" key={e.id}>{selectedGenre === e.name ? e.title : null}</h3>);
  });

  const ulGenres = genres.map((e) => {
    return (
      <li key={e.id} className="p-1 cursor-pointer"
        onClick={()=>{setSelectedGenre(e.name)}}>{e.title}</li>
    );
  });

  return (
    <div className="relative w-28 flex items-center cursor-pointer border-2 border-gray rounded-md bg-transparent py-[14px] text-sm"
        onClick={()=>{menuClicked ? setMenuClicked(false) : setMenuClicked(true)}}>
      {activeGenre}
      <ul className={`absolute -bottom-[6.7rem] left-0 w-full border-2 border-gray bg-darkGray p-1 rounded-md z-10 ${menuClicked ? 'block' : 'hidden'}`}>
        {ulGenres}
      </ul>
      <i className={`fa-solid fa-angle-down absolute right-2 ${menuClicked ? 'fa-angle-down' : 'fa-angle-left'}`}></i>
    </div>
  );
}

export default TopRatedDropMenu;
