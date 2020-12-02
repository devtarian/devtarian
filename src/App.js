import Header from './components/header/Header';
import SearchContainer from './components/search/SearchContainer';
import MainContainer from './components/main/MainContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchContainer />
      <MainContainer />
    </div>
  );
}

export default App;
