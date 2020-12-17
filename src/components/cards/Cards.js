import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Cards = ({ info, loadProducts }) => {
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
      {info.map((el, index) => {
        const lastEl = index === info.length - 1;
        return (
          <li key={el.id} ref={lastEl ? refTarget : null}>
            <div className="imgInfo">
              <img src={el.src} alt="" />
              <div className="cover"></div>
            </div>
            <div className="itemInfo">
              <span className="category">{el.category}</span>
              <h3>{el.product}</h3>
              <span className="ingredient">{el.ingredient}</span>
            </div>
          </li>
        );
      })}
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
