import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Checkbox, Select } from '../../components/form';
import { CheckboxWrap } from '../../components/form/Checkbox';
import { SelectWrap } from '../../components/form/Select';
import CircleImgTextCard, { CircleCardWrap } from '../../components/card/CircleImgTextCard';
import useInput from '../../hooks/useInput';
import useActivedBtn from '../../hooks/useActivedBtn';

const VegiWiki = ({ wikiPosts }) => {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState(wikiPosts);
  const { inputs, setInputs, onInputChange } = useInput();
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
          category: '가공식품',
          files: [],
          product: '포테토칩',
          ingredient: '밀/대두',
          comments: '',
          commentList: [
            {
              id: 0,
              writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
              createAt: '3초 전',
              contents: '',
            },
          ],
        },
        {
          category: '가공식품',
          files: [],
          product: '포테토칩',
          ingredient: '밀/대두',
          comments: '',
          commentList: [
            {
              id: 0,
              writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
              createAt: '3초 전',
              contents: '',
            },
          ],
        },
        {
          id: 14,
          category: '가공식품',
          files: [],
          product: '포테토칩',
          ingredient: '밀/대두',
          comments: '',
          commentList: [
            {
              id: 0,
              writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
              createAt: '3초 전',
              contents: '',
            },
          ],
        },
        {
          id: 15,
          category: '가공식품',
          files: [],
          product: '포테토칩',
          ingredient: '밀/대두',
          comments: '',
          commentList: [
            {
              id: 0,
              writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
              createAt: '3초 전',
              contents: '',
            },
          ],
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
          name="category"
          label="카테고리"
          info={CATEGORIES}
          activedBtn={activedBtn}
          setInputs={setInputs}
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
  width: 100%;
  max-width: 1200px;
  margin: 0.6rem auto 0;
  padding: 1.5rem;

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
      bottom: 39px;
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
    margin: 2.5rem auto 0;
  }
  ${CircleCardWrap} {
    width: calc(25% - 1.6rem);
  }

  @media (max-width: 767px) {
    ${CircleCardWrap} {
      width: calc(33% - 1.6rem);
    }
    .filters {
      ${SelectWrap} {
        bottom: -61px;
      }
    }
  }
  @media (max-width: 639px) {
    ul {
      padding: 3rem;
    }
    ${CircleCardWrap} {
      width: calc(100% - 1.6rem);
    }
  }
`;

const CATEGORIES = ['all', 'processed', 'snack', 'bakery', 'drink', 'etc'];

const OPTIONS = ['createdAt', 'asc', 'desc'];
