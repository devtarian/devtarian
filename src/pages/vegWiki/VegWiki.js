import React from 'react';
import styled from 'styled-components';

const VegiWiki = () => {
  return (
    <Wrap>
      <div className="filters">
        <Category>
          <h2>카테고리</h2>
          <li>
            <button>전체</button>
          </li>
          <li>
            <button>가공식품</button>
          </li>
          <li>
            <button>과자/간식</button>
          </li>
          <li>
            <button>제과/제빵</button>
          </li>
          <li>
            <button>음료</button>
          </li>
          <li>
            <button>기타</button>
          </li>
        </Category>
        <Select>
          <option>최근등록순</option>
          <option>오름차순</option>
          <option>내림차순</option>
        </Select>
      </div>
      <div className="product">
        <strong>총 73개</strong>
        <Cards>
          {DUMMY_PROD.map((li) => (
            <li key={li.id}>
              <div className="imgInfo">
                <img src={li.src} alt="" />
                <div className="cover"></div>
              </div>
              <div className="itemInfo">
                <span className="category">{li.category}</span>
                <h3>{li.product}</h3>
                <span className="ingredient">{li.ingredient}</span>
              </div>
            </li>
          ))}
        </Cards>
      </div>
    </Wrap>
  );
};

export default VegiWiki;

const Wrap = styled.section`
  width: 1200px;
  margin: 6rem auto 0;

  .filters {
    padding-bottom: 2rem;
    margin: 2rem 0;
    border-bottom: 1px solid ${(props) => props.theme.gray[0]};
    overflow: hidden;
  }
  .product {
    strong {
      font-size: 0.95rem;
    }
  }

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }
`;

const Cards = styled.ul`
  overflow: hidden;
  width: 1160px;
  margin: 0.5rem auto 0;

  li {
    background: ${(props) => props.theme.background[1]};
    position: relative;
    float: left;
    width: 270px;
    height: 300px;
    margin: 0 10px 40px;
    border-radius: 10px;

    .imgInfo {
      &:hover .cover {
        opacity: 0.8;
      }
      img {
        display: block;
        width: 140px;
        height: 140px;
        margin: 34px auto 10px;
        border-radius: 50%;
      }
      .cover {
        z-index: 100;
        position: absolute;
        top: 0;
        width: 270px;
        height: 300px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.green[1]};
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
    }
    .itemInfo {
      width: 100%;
      text-align: center;
      h3 {
        margin-top: 0.15rem;
        font-size: 20px;
      }
      span {
        display: block;
      }
      .category {
        margin-top: 0.7rem;
        font-size: 0.85rem;
        color: ${(props) => props.theme.color[1]};
      }
      .ingredient {
        margin-top: 0.7rem;
      }
    }
  }
`;

const Category = styled.ul`
  float: left;

  h2 {
    font-size: 17px;
    margin-bottom: 20px;
  }
  li {
    float: left;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.color[1]};
    padding: 3px 7px;
    button {
      color: ${(props) => props.theme.color[1]};
    }
    &:hover {
      background-color: ${(props) => props.theme.brown[0]};
      button {
        color: ${(props) => props.theme.background[0]};
      }
    }
  }
  li + li {
    margin-left: 0.5rem;
  }
`;

const Select = styled.select`
  float: right;
  padding: 5px 10px;
  margin-top: 2.5rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color[1]};
  font-size: 16px;
  color: ${(props) => props.theme.color[1]};
`;

const DUMMY_PROD = [
  {
    id: 0,
    src: 'http://placehold.it/300x300.png?text=A',
    category: '과자 / 간식',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 1,
    src: 'http://placehold.it/300x300.png?text=B',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 2,
    src: 'http://placehold.it/300x300.png?text=C',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 3,
    src: 'http://placehold.it/300x300.png?text=D',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 4,
    src: 'http://placehold.it/300x300.png?text=E',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 5,
    src: 'http://placehold.it/300x300.png?text=F',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 6,
    src: 'http://placehold.it/300x300.png?text=G',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 7,
    src: 'http://placehold.it/300x300.png?text=H',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 8,
    src: 'http://placehold.it/300x300.png?text=I',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 9,
    src: 'http://placehold.it/300x300.png?text=J',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 10,
    src: 'http://placehold.it/300x300.png?text=k',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
];
