import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Svg from '../common/Svg';

const ViewAll = ({ to }) => {
  return (
    <ViewAllWrap>
      <Link to={to}>
        <span>
          더 보기 <Svg type="arrowRight" w="23px" h="23px" color="#111" />
        </span>
      </Link>
    </ViewAllWrap>
  );
};

export default ViewAll;

export const ViewAllWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  span {
    color: ${(props) => props.theme.color[0]};
  }
`;
