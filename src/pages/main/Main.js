import React from 'react';
import Search from '../../components/search/Search';
import Section from './section/Section';
import Footer from './footer/Footer';
import BackGroundImg from '../../images/pexels-ready-made-3850607.jpg';

const Main = ({ wikiPosts }) => {
  return (
    <>
      <Search posTop="180px" bg={BackGroundImg} />
      <Section wikiPosts={wikiPosts} />
      <Footer />
    </>
  );
};

export default Main;
