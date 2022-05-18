import React, { useEffect } from 'react'

function Comments(props) {
  useEffect(() => {
  }, [props.list]);
  let renderList = props.list.map((item) =>
    <div className='border border-gray-700 border-opacity-35 rounded-lg py-2 px-2 mx-2 text-slate-400'>{item}</div>
  );
  return (
    <div className="text-gray-400 bg-gray-900 body-font mx-auto">
      <h1 className="text-xl text-center text-indigo-400 tracking-widest font-medium title-font mb-1 px-4 underline">COMMENTS</h1>
      {renderList}
    </div>
  )
}

export default Comments
