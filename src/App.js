import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Search from './Components/Search';
import Article from './Components/Article';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  async function searchQueries(val) {
    let response = await fetch(`https://hn.algolia.com/api/v1/search?query=${val}`);
    let dataGot = await response.json();
    setData(dataGot);
    return dataGot;
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Landing_Page />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search search={searchQueries} />} />
          <Route path="article" element={<Article />} />
          {/* <Route path="signup" element={<Signup />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
