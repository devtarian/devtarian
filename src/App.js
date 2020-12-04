import Header from './components/header/Header';
import Search from './components/search/Search';
import Main from './components/main/Main';
import BackGroundImg from './components/search/images/pexels-ready-made-3850607.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Search posTop="180px" bg={BackGroundImg} />
      <Main />
    </div>
  );
}

export default App;
