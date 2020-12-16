import React from 'react';
import styled from 'styled-components';

const Cards = ({ info }) => {
  return (
    <Wrap>
      {info.map((li) => (
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
    </Wrap>
  );
};

export default Cards;

const Wrap = styled.ul`
  overflow: hidden;
  width: 1160px;
  margin: 2.5rem auto 0;

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
