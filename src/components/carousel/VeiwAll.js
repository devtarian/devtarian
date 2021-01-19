import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as MoreSvg } from '../../images/icons/arrow_right.svg';

const ViewAll = ({ to }) => {
  return (
    <ViewAllWrap>
      <Link to={to}>
        <span>
          더 보기 <MoreBtn />
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

const MoreBtn = styled(MoreSvg)`
  width: 23px;
  height: 23px;
  vertical-align: top;
  fill: ${(props) => props.theme.color[0]};
`;
