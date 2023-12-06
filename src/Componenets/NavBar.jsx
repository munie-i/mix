import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


function NavBar() {

    const [barsClicked, setBarsClicked] = useState(false);
    const links = [
        {id: 1, name: 'Home', path: '/'},
        {id: 2, name: 'Movies', path: '/movies'},
        {id: 3, name: 'TV Show', path: '/tv-show'},
        {id: 4, name: 'Animation', path: '/animation'},
    ];

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
        setBarsClicked(false);
    }, [location]);

    return (
        <div className="absolute bg-transparent z-50 w-full py-3 flex items-center justify-between px-20 md:px-10 after:w-11/12 after:h-[2px] after:bg-[#ffffff2f] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]">
            <div className='flex items-center'>
                <Link to={'/'} className='text-4xl text-red font-medium mr-10 md:mr-3'>Mix</Link>
                <ul className={`z-30 sm:fixed sm:w-3/4 sm:h-full sm:bg-lightBlack sm:top-0 sm:flex sm:flex-col sm:items-center sm:pt-24 ${ barsClicked ? 'sm:right-0' : 'sm:-right-full' }`}>
                    {links.map((e)=>{
                        return (
                            <Link key={e.id} to={e.path} 
                                className='sm:mr-0 sm:mb-3 text-white font-normal mr-5 md:mr-3 relative last:m-0 after:absolute after:-left-1/4 after:opacity-0 hover:after:left-0 hover:after:opacity-100 after:-bottom-1 after:w-8/12 after:h-[2px] after:bg-red after:transition-all after:duration-500'>
                                    {e.name}
                            </Link>
                        )
                    })}
                </ul>
            </div>
            <div className='flex items-center'>
                <Link to={'/search'} className='fa-solid fa-magnifying-glass mr-4 text-white text-lg cursor-pointer sm:text-xl'
                    ></Link>
                <i className="fa-regular fa-circle-user text-white text-lg cursor-pointer block sm:hidden"></i>
                <i className={`z-30 fa-solid fa-bars-staggered text-white text-xl cursor-pointer hidden sm:block ${ barsClicked ? 'fa-x rotate-180' : '' }`}
                    onClick={()=>{ barsClicked ? setBarsClicked(false) : setBarsClicked(true) }}></i>
            </div>
        </div>
    )
}

export default NavBar;