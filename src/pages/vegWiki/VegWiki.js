import React, { useState } from 'react';
import styled from 'styled-components';
// import { useSelector, useDispatch } from 'react-redux';
// import wikiActions from '../../redux/actions/wikiActions';
// import Loading from '../../components/loading/Loding';
import { Checkbox, Select } from '../../components/form';
import { CheckboxWrap } from '../../components/form/Checkbox';
import { SelectWrap } from '../../components/form/Select';
import CircleImgTextCard, { CircleCardWrap } from '../../components/card/CircleImgTextCard';
import EditBtn, { EditBtnWrap } from '../../components/editBtn/EditBtn';
import useInput from '../../hooks/useInput';
import useActivedBtn from '../../hooks/useActivedBtn';
import useObserver from '../../hooks/useObserver';

const VegiWiki = ({ wikiPosts }) => {
  //const [category, setCategory] = useState();

  const [products, setProducts] = useState(wikiPosts);
  const { inputs, setInputs, onInputChange } = useInput();
  const { activedBtn, onCheckboxClick } = useActivedBtn();

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

  const refTarget = useObserver(loadProducts);

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
      <EditBtn to="/wikiForm" innerText="위키 작성" />
      <div className="product">
        <strong>총 {products.length}개</strong>
        <ul>
          {products.map((data, index) => {
            const lastEl = index === products.length - 1;

            return <CircleImgTextCard key={index} data={data} ref={lastEl ? refTarget : null} />;
          })}
        </ul>
      </div>
    </Wrap>
  );
};

export default VegiWiki;

const Wrap = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0.6rem auto 0;
  padding: 1.5rem;

  ${EditBtnWrap} {
    top: 199px;
    right: 24px;
  }
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
    ${EditBtnWrap} {
      top: 256px;
    }
    ${CircleCardWrap} {
      width: calc(33% - 1.6rem);
    }
    .filters {
      padding-bottom: 5.5rem;
    }
  }
  @media (max-width: 639px) {
    ul {
      padding: 1rem;
    }
    ${EditBtnWrap} {
      top: 298px;
    }
    ${CircleCardWrap} {
      width: calc(100% - 1.6rem);
    }
  }
`;

const CATEGORIES = ['all', 'processed', 'snack', 'bakery', 'drink', 'etc'];

const OPTIONS = ['createdAt', 'asc', 'desc'];
