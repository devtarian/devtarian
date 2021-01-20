import styled from 'styled-components';
import kyungyoonHa from '../../../images/kyungyoonha.png';
import dayoungLee from '../../../images/dayounglee.png';

const Footer = () => {
  return (
    <Wrap>
      <ul>
        <li className="linkItem">
          <a href="https://github.com/kyungyoonha">
            <img src={kyungyoonHa} alt="kyungyoonHa's Repository" />
            <strong>kyungyoonHa</strong>
          </a>
        </li>
        <li className="linkItem">
          <a href="https://github.com/daayooung">
            <img src={dayoungLee} alt="dayoungLee's Repository" />
            <strong>dayoungLee</strong>
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
  margin-top: 16rem;

  ul {
    text-align: center;
  }
  .linkItem {
    display: inline-block;
    width: 80px;
    height: 60px;
    margin: 15rem 10px 0;
    margin: 0 auto;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    strong {
      font-size: 10px;
    }
  }

  p {
    margin: 1.2rem 0 2rem;
    text-align: center;
    font-size: 12px;
  }
`;

export default Footer;
