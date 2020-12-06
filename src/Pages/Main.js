import React from 'react';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import Section from '../components/main/Main';

const Main = () => {
  return (
    <>
      <Header />
      <Search posTop="180px" bg={BackGroundImg} />
      <Section />
    </>
  );
};

export default Main;
