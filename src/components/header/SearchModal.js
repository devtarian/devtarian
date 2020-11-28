import SearchForm from '../search/SearchForm';

const SearchModal = () => {
  return (
    <section>
      <ul>
        <li>
          <a href="">전체</a>
        </li>
        <li>
          <a href="">식당</a>
        </li>
        <li>
          <a href="">제품</a>
        </li>
      </ul>
      <SearchForm />
      <button>x</button>
    </section>
  );
};

export default SearchModal;
