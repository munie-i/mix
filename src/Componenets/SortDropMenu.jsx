import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../RTK-Store/sortReducer";

function SortDropMenu() {
  const [selectedSort, setSelectedSort] = useState('popular');
  const [menuClicked, setMenuClicked] = useState(false);
  const dispatch = useDispatch();

  const sort = [
    { id: 1, title: "Popular", name: "popular"},
    { id: 2, title: "Top rated", name: "top_rated"},
  ];

  useEffect(()=>{
    dispatch(setSort(selectedSort))
  },[selectedSort])

  const activeSort = sort.map((e) => {
    return (<h3 className="absolute left-2" key={e.id}>{selectedSort === e.name ? e.title : null}</h3>);
  });

  const ulSort = sort.map((e) => {
    return (
      <li key={e.id} className="p-1 cursor-pointer"
        onClick={()=>{setSelectedSort(e.name)}}>{e.title}</li>
    );
  });

  return (
    <div className="relative w-28 flex items-center cursor-pointer border-2 border-gray rounded-md bg-transparent py-[14px] text-sm"
        onClick={()=>{menuClicked ? setMenuClicked(false) : setMenuClicked(true)}}>
      {activeSort}
      <ul className={`absolute -bottom-20 left-0 w-full border-2 border-gray bg-darkGray p-1 rounded-md z-10 ${menuClicked ? 'block' : 'hidden'}`}>
        {ulSort}
      </ul>
      <i className={`fa-solid fa-angle-down absolute right-2 ${menuClicked ? 'fa-angle-down' : 'fa-angle-left'}`}></i>
    </div>
  );
}

export default SortDropMenu;
