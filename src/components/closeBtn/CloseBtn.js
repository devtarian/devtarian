import styled from 'styled-components';

const CloseBtn = () => {
  return (
    <CloseBtnWrap>
      <i>x</i>
    </CloseBtnWrap>
  );
};

export default CloseBtn;

const CloseBtnWrap = styled.button`
  position: fixed;
  top: 10px;
  right: 20px;
  width: 16px;
  height: 16px;

  i {
    font-size: 22px;
  }
`;
