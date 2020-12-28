import React from 'react';
import styled from 'styled-components';

const WikiTextBox = () => {
  return (
    <Wrap>
      <div className="innerWrap">
        <h2 className="category">과자/스낵</h2>
        <h3 className="product">로투스</h3>
        <div className="ingredient textBox">
          <strong className="infoTitle">성분</strong>
          <span className="infoContents">밀, 대두</span>
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
`;
