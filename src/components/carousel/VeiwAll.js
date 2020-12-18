import styled from 'styled-components';

const ViewAll = () => {
  return (
    <ViewAllWrap>
      <a href="">
        <span>더 보기</span>
        <i>></i>
      </a>
    </ViewAllWrap>
  );
};

export default ViewAll;

export const ViewAllWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 0;

  i {
    margin-left: 0.25rem;
  }
`;
