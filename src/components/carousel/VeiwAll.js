import styled from 'styled-components';

const ViewAll = () => {
  return (
    <Wrap>
      <a href="/">
        <span>더 보기</span>
        <i>{'>'}</i>
      </a>
    </Wrap>
  );
};

export default ViewAll;

const Wrap = styled.div`
  position: absolute;
  top: 10px;
  right: 0;

  i {
    margin-left: 0.25rem;
  }
`;
