import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import Result from './Result';

function Search(props) {
    const [dobj, setDobj] = useState({'hits':[]});
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
    console.log(dobj);
    return (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-800">
                    {dobj.hits.map((resultList) => { return <><Result key={resultList.sno} data={resultList} /></> })}
                </div>
            </div>
        </section>
    )
}

export default Search
