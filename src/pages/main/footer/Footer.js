import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrap>
      <ul>
        <li className="linkItem">
          <a href="https://github.com/daayooung">
            <img src="http://placehold.it/40x40.png?text=A" alt="GIT HUB" />
          </a>
        </li>
        <li className="linkItem">
          <a href="https://twofivezero.tistory.com/">
            <img src="http://placehold.it/40x40.png?text=A" alt="개발블로그" />
          </a>
        </li>
      </ul>
      <p>
        <a href="https://github.com/devtarian">copyright @ https://github.com/devtarian</a>
      </p>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;

  ul {
    text-align: center;
  }
  .linkItem {
    display: inline-block;
    margin: 15rem 10px 0;

    img {
      border-radius: 50%;
    }
  }

  p {
    margin: 2rem 0;
    text-align: center;
    font-size: 12px;
  }
`;

export default Footer;
