import { Link } from "react-router-dom";

function Footer() {

    const date = new Date();
    const getDate = date.getFullYear();

    const links = [
        {id: 1, name: 'Home', path: '/'},
        {id: 2, name: 'Movies', path: '/movies'},
        {id: 3, name: 'TV Show', path: '/tv-show'},
        {id: 4, name: 'Animation', path: '/animation'},
    ];

    return (
        <div className="mt-auto flex flex-col justify-between bg-[#0c0c0c] text-gray w-full py-12 px-32 md:px-5">
            <div className="w-full flex flex-wrap justify-between pb-6">
            <div className="w-[40%] mb-2 md:w-full">
                <h2 className="text-xl font-medium text-white">About the website</h2>
                <p className="text-md pr-5 my-2 leading-7">
                    Mix is a simple website for streaming movies and tv series and we are not responsible for what is displayed.
                </p>
            </div>
            <div className="flex flex-col md:w-1/2 md:mb-4">
                <h2 className="text-xl font-medium text-white">Quick links</h2>
                {links.map((e)=>{
                    return (
                        <Link key={e.id} to={e.path} 
                            className='mt-2 font-normal relative'>
                                {e.name}
                        </Link>
                    )
                })}
            </div>
            <div className="flex flex-col md:w-1/2 md:mb-4">
                <h2 className="text-xl font-medium text-white">Resources</h2>
                <a href="https://www.themoviedb.org" className="my-2 text-md">API for devs</a>
            </div>
            <div className="flex flex-col md:w-full">
                <h2 className="text-xl font-medium text-white">Get in touch</h2>
                <a href="https://www.instagram.com/munie_i" target="_blank" rel="noreferrer" className="text-md my-2"><i className="fa-brands fa-instagram mr-2"></i>Instagram</a>
                <a href="https://www.github.com/munie-i" target="_blank" rel="noreferrer" className="text-md"><i className="fa-brands fa-github mr-2"></i>Github</a>
            </div>
            </div>
            <div className="w-full pt-6 text-center border-t-[1px] border-gray-400">
                <p className="text-md"><span className="border-r-5 border-solid border-gray-600">Developed by Mina Samir</span> All copyrights © {getDate} belongs to their owners.</p>
            </div>
        </div>
    )
}

export default Footer;