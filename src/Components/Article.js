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
    let response = await fetch(`http://hn.algolia.com/api/v1/items/${val}`);
    let dataGot = await response.json();
    setData(dataGot);
    return dataGot;
  }

  useEffect(() => {
    searchbyID(articleID);
    console.log(data);
  }, [articleID]);

  useEffect(() => {
    console.log(data);
    flatten_data = flatten(data);
    console.log(flatten_data);
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
    console.log(commentList);
  }, [data]);
  return (
    <>
    {(commentList.length != 0) ? <div className='mx-auto'>
      <div className="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl mx-2 my-2">
        <a className="block p-6 bg-white sm:p-8 rounded-xl">
          <div className="mt-16 sm:pr-8">
            <h5 className="text-xl font-bold text-gray-900">Title - {data.title}</h5>
            <p className="mt-2 text-sm text-gray-500">
              Points - {data.points}
            </p>
          </div>
        </a>
      </div>
      <Comments list={commentList} />
    </div> : <div className='rounded-lg'><Progress /></div>}</>
  )
}

export default Article
