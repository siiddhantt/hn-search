import React, { useState } from 'react'

function Result(props) {
    let pubtime = new Date(props.data.created_at).toDateString();
    
    return (
        <>
            <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg transition-colors duration-50 bg-blue-900 bg-opacity-0 border active:bg-slate-700 hover:bg-slate-800 focus:outline-none focus:shadow-outline-blue" >
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="title-font text-slate-600 text-sm">Publish date</span>
                        <span className="font-semibold mt-1 text-slate-400 text">{pubtime}</span>
                    </div>
                    <div className="md:flex-grow">
                        <a href={props.data.url}>
                            <h2 className="text-2xl font-medium text-white title-font mb-2 no-underline hover:underline">{props.data.title}</h2>
                        </a>
                        <p className="leading-relaxed">{props.data.storytext}</p>
                        <a href={props.data.url} className="text-indigo-400 inline-flex items-center mt-4 hover:text-indigo-700">View post
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result
