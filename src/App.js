import Header from './components/header/Header';
import SearchContainer from './components/search/SearchContainer';
import MainContainer from './components/main/MainContainer';
import BackGroundImg from './components/search/images/pexels-ready-made-3850607.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchContainer paddingTop="180px" background={BackGroundImg} box-shadow="none" />
      <MainContainer />
    </div>
  );
}

export default App;
