import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Search from './components/search/Search';
import Main from './components/main/Main';
import { loadRecentKeywords, saveRecentKeywords } from './Service/recentKeywordService';
import BackGroundImg from './components/search/images/pexels-ready-made-3850607.jpg';
import './App.css';

function App() {
  const [recentKeywords, setRecentKeywords] = useState(loadRecentKeywords() || []);

  useEffect(() => {
    saveRecentKeywords(recentKeywords);
  }, [recentKeywords]);

  const onAddRecentKeywords = (keyword) => {
    if (recentKeywords?.includes(keyword)) return;
    setRecentKeywords([keyword, ...recentKeywords].slice(0, 5));
  };

  return (
    <div className="App">
      <Header recentKeywords={recentKeywords} onAddRecentKeywords={onAddRecentKeywords} />
      <Search
        posTop="180px"
        bg={BackGroundImg}
        recentKeywords={recentKeywords}
        onAddRecentKeywords={onAddRecentKeywords}
      />
      <Main />
    </div>
  );
}

export default App;
