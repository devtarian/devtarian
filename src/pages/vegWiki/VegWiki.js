import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { wikiActions } from '../../redux/actions';
import { CheckboxWrap } from '../../components/form/Checkbox';
import { SelectWrap } from '../../components/form/Select';
import CircleImgTextCard, { CircleCardWrap } from '../../components/card/CircleImgTextCard';
import EditBtn, { EditBtnWrap } from '../../components/editBtn/EditBtn';
import useObserver from '../../hooks/useObserver';
import Loading from '../../components/loading/Loding';
import VegWikiFilter from './vegWikiFilter/vegWikiFilter';

const VegiWiki = () => {
  const dispatch = useDispatch();
  const { isFetching, totalCount, data, fetchMore } = useSelector((state) => state.wiki);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const handleFetchMore = () => {
    if (!fetchMore) return;

    dispatch(wikiActions.getWiki());
  };

  useEffect(() => {
    dispatch(wikiActions.getWiki());
  }, [dispatch]);
  const refTarget = useObserver(handleFetchMore);

  if (isFetching) return <Loading />;

  return (
    <Wrap>
      <VegWikiFilter />
      <EditBtn to="/wikiForm" innerText="위키 작성" />
      <div className="product">
        <strong>총 {totalCount}개</strong>
        <ul>
          {data.map((item, index) => {
            const lastEl = index === data.length - 1;

            return (
              <CircleImgTextCard key={index} data={item} ref={lastEl ? refTarget : null} isLoggedIn={isLoggedIn} />
            );
          })}
        </ul>
      </div>
    </Wrap>
  );
};

export default VegiWiki;

const Wrap = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0.6rem auto 0;
  padding: 1.5rem;

  ${EditBtnWrap} {
    top: 199px;
    right: 24px;
  }
  .filters {
    position: relative;
    padding-bottom: 2rem;
    margin: 2rem 0;
    border-bottom: 1px solid ${(props) => props.theme.gray[0]};

    ${CheckboxWrap} {
      input {
        padding: 0.35rem 0.75rem;
      }
    }
    ${SelectWrap} {
      position: absolute;
      bottom: 39px;
      right: 0;
    }
  }
  .product {
    strong {
      font-size: 0.95rem;
    }
  }

  ul {
    overflow: hidden;
    margin: 2.5rem auto 0;
  }
  ${CircleCardWrap} {
    width: calc(25% - 1.6rem);
  }

  @media (max-width: 767px) {
    ${EditBtnWrap} {
      top: 256px;
    }
    ${CircleCardWrap} {
      width: calc(33% - 1.6rem);
    }
    .filters {
      padding-bottom: 5.5rem;
    }
  }
  @media (max-width: 639px) {
    ul {
      padding: 1rem;
    }
    ${EditBtnWrap} {
      top: 298px;
    }
    ${CircleCardWrap} {
      width: calc(100% - 1.6rem);
    }
  }
`;

const CATEGORIES = ['all', 'processed', 'snack', 'bakery', 'drink', 'etc'];

const OPTIONS = ['createdAt', 'asc', 'desc'];
