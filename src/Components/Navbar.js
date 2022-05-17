import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Navbar(props) {
    const [query, setQuery] = useState("");
    let navigate = useNavigate();
    const submit =(e)=>{
        e.preventDefault();
        navigate('/search', {state: {query : query}});
    }
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow-lg">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    {/* <div className="mr-3 text-3xl text-white"> <BsTerminal /></div> */}
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">HN-Search</span>
                </a>
                <div className="flex md:order-2 gap-x-2">
                    <form className="relative mt-2" onSubmit={submit}>
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." onChange={(e) => setQuery(e.target.value)}/>
                    </form>
                    {/* <div className="p-2">
                        <div className="dropdown inline-block">
                            <button className="bg-emerald-900 text-green-500 font-semibold py-2 px-4 rounded-lg shadow-xl inline-flex items-center">
                                <span className="mr-1">Filter</span>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                            </button>
                        </div>
                    </div> */}
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                </div>
            </div>
        </nav>

    )
}

export default Navbar