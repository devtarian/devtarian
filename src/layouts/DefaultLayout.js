import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Wrap>
          <Header />
          <Component {...props} wikiPosts={DUMMY_WIKIPOST} />
        </Wrap>
      )}
    />
  );
};

export default DefaultLayout;

const Wrap = styled.div`
  padding-top: 58px;
`;

const DUMMY_WIKIPOST = [
  {
    id: 0,
    category: '가공식품',
    files: [],
    product: '로투스',
    ingredient: '밀/대두',
    commentList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        createAt: '3초 전',
        commentContents: '멋져요!',
      },
      {
        id: 1,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        createAt: '3초 전',
        commentContents: '멋져요!',
      },
    ],
  },
  {
    id: 1,
    category: '가공식품',
    files: [],
    product: '로투스',
    ingredient: '밀/대두',
    commentList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        createAt: '3초 전',
        commentContents: '',
      },
    ],
  },
  {
    id: 2,
    category: '가공식품',
    files: [],
    product: '로투스',
    ingredient: '밀/대두',
    commentList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        createAt: '3초 전',
        commentContents: '',
      },
    ],
  },
  {
    id: 3,
    category: '가공식품',
    files: [],
    product: '로투스',
    ingredient: '밀/대두',
    commentList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        createAt: '3초 전',
        commentContents: '',
      },
    ],
  },
  {
    id: 4,
    category: '가공식품',
    files: [],
    product: '로투스',
    ingredient: '밀/대두',
    commentList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        createAt: '3초 전',
        commentContents: '',
      },
    ],
  },
];
