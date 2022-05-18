import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import Result from './Result';
import Progress from './Progress';

function Search(props) {
    const [dobj, setDobj] = useState({ 'hits': [] });
    let dataQ;
    const { state } = useLocation();
    const { query } = state;
    async function disp() {
        dataQ = await props.search(query);
        setDobj(dataQ);
    }
    useEffect(() => {
        disp();
    }, [query]);
    return (
        <>
        {
            dobj.hits.length != 0 ? <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
                {/* <h1 className="sm:text-3xl text-2xl font-medium title-font font-Poppins text-slate-700 text-center mt-2 ">Search results..</h1> */}
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-800">
                        {dobj.hits.map((resultList) => { return <><Result key={resultList.sno} data={resultList} /></> })}
                    </div>
                </div>
            </section> : <div className='rounded-lg'><Progress /></div>}</>
    )
        }

export default Search
