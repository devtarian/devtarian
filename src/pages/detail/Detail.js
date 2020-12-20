import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DetailBox from './DetailBox';
import Review from './Review';
import { ReactComponent as EditSvg } from '../../icons/edit.svg';

const DETAIL = {
  urls: [],
  store: '그랑블루',
  contact: '02-927-5808',
  openHours: { open: '매일 09:00 ~ 21:00', dayOff: '공휴일' },
  menus: {
    0: ['어썸버거', '3000'],
    1: ['어썸버거', '3000'],
    2: ['어썸버거', '3000'],
  },
  location: '서울특별시 중구 수표동 수표로 66',
};

const Detail = ({ posts }) => {
  return (
    <Wrap>
      <DetailBox />
      <div className="review">
        <div className="addReview">
          <Link to="/review">
            <EditBtn />
            <span>리뷰 작성</span>
          </Link>
        </div>
        <Review posts={posts} />
      </div>
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.section`
  width: 1200px;
  margin: 0 auto;
  .review {
    position: relative;

    .addReview {
      position: absolute;
      top: 0;
      right: 0;

      a {
        padding: 0.4rem 0.6rem;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.gray[1]};
        background-color: ${(props) => props.theme.green[1]};
        text-align: center;
        color: ${(props) => props.theme.background[0]};
        -webkit-box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};
        box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};

        span {
          margin-left: 0.25rem;
          font-size: 0.95rem;
        }

        &:hover {
          background-color: ${(props) => props.theme.green[0]};
        }
      }
    }
  }
`;

const EditBtn = styled(EditSvg)`
  width: 20px;
  height: 20px;
  vertical-align: top;
  fill: ${(props) => props.theme.background[0]};
`;
