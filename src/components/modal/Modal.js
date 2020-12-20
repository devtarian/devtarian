import React from 'react';
import styled from 'styled-components';

const Modal = ({ onClickClose, children }) => {
  return (
    <Wrap onClick={onClickClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </Wrap>
  );
};

export default Modal;

const Wrap = styled.div`
  display: block;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 200;
  background: rgba(0, 0, 0, 0.56);
  overflow: hidden scroll;
  text-align: center;
  padding: 20px 0px;
  overflow: auto;

  .content {
    background: rgb(255, 255, 255);
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px 0px;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: auto;
    padding: 0 20px;
  }
`;
