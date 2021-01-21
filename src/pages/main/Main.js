import React from 'react';
import styled from 'styled-components';
import Search, { SearchWrap, InnerWrap } from '../../components/search/Search';
import { SearchInput } from '../../components/search/searchForm/SearchForm';
import Section from './section/Section';
import Footer from './footer/Footer';
import BackGroundImg from '../../images/pexels-ready-made-3850607.jpg';

const Main = () => {
  return (
    <MainWrap>
      <Search />
      <Section />
      <Footer />
    </MainWrap>
  );
};

export default Main;

export const MainWrap = styled.div`
  ${SearchInput} {
    border: transparent;
  }
  ${SearchWrap} {
    height: 434px;
    background: url(${BackGroundImg});
    background-size: cover;
    background-position: center;
  }
  ${InnerWrap} {
    width: 55%;
    top: 180px;
  }
`;
