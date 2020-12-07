import React from 'react';
import Search from '../../components/search/Search';
import Section from './section/Section';
import Footer from './footer/Footer';
import BackGroundImg from '../../components/search/images/pexels-ready-made-3850607.jpg';

const Main = () => {
  return (
    <>
      <Search posTop="180px" bg={BackGroundImg} />
      <Section />
      <Footer />
    </>
  );
};

export default Main;
