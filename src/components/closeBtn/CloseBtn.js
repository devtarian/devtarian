import styled from 'styled-components';

const CloseBtn = ({ onToggleShow }) => {
  const handleCloseBtnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleShow(false);
  };

  return (
    <CloseBtnWrap onClick={handleCloseBtnClick}>
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
