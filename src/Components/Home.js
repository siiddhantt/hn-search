import React from 'react'

function Home() {
  return (
    <div className='bg_image'>
      <section className="text-white">
        <div className="max-w-screen-xl px-4 py-28 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              HN-Search

            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Millions of articles and comments at your fingertips!
            </p>
            <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
              HN Search provides real-time full-text search for the HackerNews community site. Source code is available on GitHub. Just start searching in the search bar :D
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring" href="https://hn.algolia.com/api">
                API Documentation
              </a>

              <a className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring" href="https://github.com/siiddhantt">
                My GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
