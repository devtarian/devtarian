import SearchModal from '../SearchModal';

const Nav = () => {
  return (
    <ul>
      <li>
        <a href="">피드 쓰기</a>
      </li>
      <li>
        <a href="">비건 편의점</a>
      </li>
      <li>
        <a href="">검색</a>
        <SearchModal />
      </li>
    </ul>
  );
};

export default Nav;
