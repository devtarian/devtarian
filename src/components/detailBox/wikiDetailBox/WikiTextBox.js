import React from 'react';
import styled from 'styled-components';

const WikiTextBox = ({ wikiPost }) => {
  console.log(wikiPost);
  const { category, product, ingredient } = wikiPost;
  return (
    <Wrap>
      <div className="innerWrap">
        <h2 className="category hide">{category}</h2>
        <h3 className="product hide">{product}</h3>
        <div className="ingredient textBox">
          <strong className="infoTitle">성분</strong>
          <span className="infoContents">{ingredient}</span>
        </div>
      </div>
    </Wrap>
  );
};

export default WikiTextBox;

const Wrap = styled.div`
  float: left;
  width: 600px;
  height: 700px;
  padding: 70px 0 0 70px;

  .hide {
    display: block;
  }
  .category {
    font-size: 1rem;
    color: ${(props) => props.theme.color[2]};
  }
  .product {
    margin: 0px 0px 10px;
    font-size: 60px;

    &:after {
      content: '';
      display: block;
      height: 1px;
      width: 65px;
      background: ${(props) => props.theme.gray[0]};
      margin: 20px 0;
    }
  }
  .textBox {
    overflow: hidden;
    margin-bottom: 15px;

    .infoTitle {
      float: left;
      display: block;
      width: 100px;
    }
    .infoContents {
      float: left;
      width: 430px;
      overflow: hidden;
    }
  }

  @media (max-width: 767px) {
    float: none;
    width: 100%;
    max-width: 600px;
    height: 100%;
    margin: 0 auto;
    padding: 0;

    .hide {
      display: none;
    }
    .textBox {
      height: 100%;
    }
  }
`;
