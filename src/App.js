import Header from './components/header/Header';
import SearchForm from './components/search/SearchForm';
import RecentKeyword from './components/search/RecentKeyword';
import Carousel from './components/carousel/carousel/Carousel';
import SquareCarousel from './components/carousel/squareCarousel/SquareCarousel';
import ReviewCarousel from './components/carousel/reviewCarousel/ReviewCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <SearchForm />
        <RecentKeyword />
      </section>
      <main>
        <Carousel />
        <Carousel />
        <SquareCarousel />
        <ReviewCarousel />
      </main>
    </div>
  );
}

export default App;
