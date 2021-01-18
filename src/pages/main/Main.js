import React from 'react';
import SearchInput from '../../components/searchInput/SearchInput';
import Section from './section/Section';
import Footer from './footer/Footer';
import BackGroundImg from '../../images/pexels-ready-made-3850607.jpg';

const Main = ({ wikiPosts }) => {
  return (
    <>
      <SearchInput posTop="180px" bg={BackGroundImg} />
      <Section wikiPosts={wikiPosts} />
      <Footer />
    </>
  );
};

export default Main;
