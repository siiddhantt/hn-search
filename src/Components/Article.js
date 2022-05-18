import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import flatten from "flat"
import Comments from './Comments';
import Progress from './Progress';
function Article() {
  let flatten_data;
  let [commentList, setCommentlist] = useState([]);
  const [data, setData] = useState({ "": "" });
  const { state } = useLocation();
  const { articleID } = state;
  async function searchbyID(val) {
    let response = await fetch(`https://hn.algolia.com/api/v1/items/${val}`);
    let dataGot = await response.json();
    setData(dataGot);
    return dataGot;
  }

  useEffect(() => {
    searchbyID(articleID);  
  }, [articleID]);

  useEffect(() => {
    flatten_data = flatten(data);
    for (const [key, value] of Object.entries(flatten_data)) {
      if (key.search('text') != -1) {
        if (value == null) {
          continue;
        }
        let mValue = value.replaceAll('<p>', '');
        mValue = mValue.replaceAll('</p>', '');
        commentList.push(mValue);
        setCommentlist(commentList);
      }
    }
  }, [data]);
  return (
    <>
    {(commentList.length != 0) ? <div className='mx-auto'>
      <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-700 via-purple-600 to-violet-400 my-2 rounded font-poppins">
        <a className="block p-6 text-indigo-200 sm:p-8">
          <div className="mt-16 sm:pr-8">
            <h5 className="text-3xl font-bold text-gray-900 rounded">{data.title}</h5>
            <h5 className="mt-2 text-lg text-slate-800 font-semibold">
              Points : {data.points}
            </h5>
          </div>
        </a>
      </div>
      <Comments list={commentList} />
    </div> : <div className='rounded-lg'><Progress /></div>}</>
  )
}

export default Article
