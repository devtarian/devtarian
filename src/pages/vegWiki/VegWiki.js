import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Checkbox, Select } from '../../components/form';
import { CheckboxWrap } from '../../components/form/Checkbox';
import { SelectWrap } from '../../components/form/Select';
import CircleImgTextCard from '../../components/card/CircleImgTextCard';
import useActivedBtn from '../../hooks/useActivedBtn';

const VegiWiki = () => {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState(DUMMY_PROD);
  const { activedBtn, setActivedBtn, onCheckboxClick } = useActivedBtn();

  const onReviewChange = (e) => {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(category);
    e.preventDefault();
    setActivedBtn('');
    setCategory('');
  };

  const loadProducts = () => {
    setProducts((prevState) => {
      const nextProducts = [
        {
          id: 12,
          imgFileURL: 'http://placehold.it/300x300.png?text=A',
          category: '과자 / 간식',
          product: '포테토칩',
          ingredient: ['밀', '대두'],
          price: 3000,
        },
        {
          id: 13,
          imgFileURL: 'http://placehold.it/300x300.png?text=B',
          category: '과자',
          product: '포테토칩',
          ingredient: ['밀', '대두'],
          price: 3000,
        },
        {
          id: 14,
          imgFileURL: 'http://placehold.it/300x300.png?text=C',
          category: '과자',
          product: '포테토칩',
          ingredient: ['밀', '대두'],
          price: 3000,
        },
        {
          id: 15,
          imgFileURL: 'http://placehold.it/300x300.png?text=D',
          category: '과자',
          product: '포테토칩',
          ingredient: ['밀', '대두'],
          price: 3000,
        },
      ];
      return [...prevState, ...nextProducts];
    });
  };

  const refTarget = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const handleObserver = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadProducts();
        observer.unobserve(entry.target);
        observer.observe(refTarget.current);
      });
    };
    const io = new IntersectionObserver(handleObserver, options);

    if (refTarget.current) {
      io.observe(refTarget.current);
    }
    return () => io && io.disconnect();
  }, [refTarget]);

  return (
    <Wrap>
      <div className="filters">
        <Checkbox
          label="카테고리"
          info={CATEGORIES}
          activedBtn={activedBtn}
          onReviewChange={onReviewChange}
          onCheckboxClick={onCheckboxClick}
        />
        <Select info={OPTIONS} />
      </div>
      <div className="product">
        <strong>총 {products.length}개</strong>
        <ul>
          {products.map((data, index) => {
            const lastEl = index === products.length - 1;
            return <CircleImgTextCard key={data.id} data={data} ref={lastEl ? refTarget : null} />;
          })}
        </ul>
      </div>
    </Wrap>
  );
};

export default VegiWiki;

const Wrap = styled.section`
  width: 1200px;
  margin: 6rem auto 0;

  .filters {
    position: relative;
    padding-bottom: 2rem;
    margin: 2rem 0;
    border-bottom: 1px solid ${(props) => props.theme.gray[0]};

    ${CheckboxWrap} {
      input {
        padding: 0.35rem 0.75rem;
      }
    }
    ${SelectWrap} {
      position: absolute;
      bottom: 32px;
      right: 0;
    }
  }
  .product {
    strong {
      font-size: 0.95rem;
    }
  }

  ul {
    overflow: hidden;
    width: 1160px;
    margin: 2.5rem auto 0;
  }
`;

const CATEGORIES = ['전체', '가공식품', '과자/간식', '제과/제빵', '음료', '기타'];

const OPTIONS = ['최근등록순', '오름차순', '내림차순'];

const DUMMY_PROD = [
  {
    id: 0,
    imgFileURL: 'http://placehold.it/300x300.png?text=A',
    category: '과자 / 간식',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 1,
    imgFileURL: 'http://placehold.it/300x300.png?text=B',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 2,
    imgFileURL: 'http://placehold.it/300x300.png?text=C',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 3,
    imgFileURL: 'http://placehold.it/300x300.png?text=D',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 4,
    imgFileURL: 'http://placehold.it/300x300.png?text=E',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 5,
    imgFileURL: 'http://placehold.it/300x300.png?text=F',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 6,
    imgFileURL: 'http://placehold.it/300x300.png?text=G',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 7,
    imgFileURL: 'http://placehold.it/300x300.png?text=H',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 8,
    imgFileURL: 'http://placehold.it/300x300.png?text=I',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 9,
    imgFileURL: 'http://placehold.it/300x300.png?text=J',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 10,
    imgFileURL: 'http://placehold.it/300x300.png?text=K',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 11,
    imgFileURL: 'http://placehold.it/300x300.png?text=L',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
];
