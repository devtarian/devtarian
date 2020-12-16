import React from 'react';
import styled from 'styled-components';
import { Checkbox, Select } from '../../components/form';
import Cards from '../../components/cards/Cards';

const VegiWiki = () => {
  return (
    <Wrap>
      <div className="filters">
        <Checkbox title="카테고리" info={CATEGORIES} />
        <Select info={OPTIONS} />
      </div>
      <div className="product">
        <strong>총 {DUMMY_PROD.length}개</strong>
        <Cards info={DUMMY_PROD} />
      </div>
    </Wrap>
  );
};

export default VegiWiki;

const Wrap = styled.section`
  width: 1200px;
  margin: 6rem auto 0;

  h2 {
    margin-bottom: 20px;
    font-size: 30px;
  }
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
`;

const CATEGORIES = ['전체', '가공식품', '과자/간식', '제과/제빵', '음료', '기타'];

const OPTIONS = ['최근등록순', '오름차순', '내림차순'];

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
