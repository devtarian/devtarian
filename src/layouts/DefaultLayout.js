import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { loadPosts, savePosts } from '../Service/postService';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, user, ...rest }) => {
  const INIT_POST = [
    {
      id: 0,
      writer: user,
      createAt: '3초 전',
      favorite: false,
      store: {
        category: '식당',
        vegType: [],
        imgFiles: [],
        imgFileURLs: [],
        starRating: 4.5,
        storeName: '발우공양',
        region: '서울',
        address: '서울특별시 중구 수표동 수표로 66',
        contactNum: '010-7318-1226',
        operatingHours: ['09:00 ~ 21:00'],
        operatingHoursMemo: ['휴무일: 공휴일'],
        menuList: [
          {
            id: 0,
            menu: '어썸 버거',
            vegtype: [],
            price: 7000,
          },
        ],
      },
      reviewList: [
        {
          id: 0,
          imgFiles: [],
          imgFileURLs: [],
          starRating: 4.5,
          title: '와!',
          contents:
            'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
          likes: 1,
          likesOfMe: false,
          commentList: [
            {
              id: 0,
              writer: user,
              createAt: '3초 전',
              contents: '굉장해요!',
            },
          ],
        },
      ],
    },
  ];

  const INIT_WIKIPOST = [
    {
      id: 0,
      category: '가공식품',
      files: [],
      product: '',
      ingredient: '',
      commentList: [
        {
          id: 0,
          writer: user,
          createAt: '3초 전',
          contents: '',
        },
      ],
    },
  ];
  const [posts, setPosts] = useState(DUMMY_POSTS);
  // const [posts, setPosts] = useState(loadPosts());
  const [wikiPosts, setWikiPosts] = useState(DUMMY_WIKIPOST);

  useEffect(() => {
    savePosts(posts);
  }, [posts]);

  const onAddPost = (post) => {
    console.log('posts', post);
    const {
      vegType,
      imgFiles,
      imgFileURLs,
      starRating,
      storeName,
      region,
      address,
      contactNum,
      operatingHours,
      operatingHoursMemo,
      menuList: [{ id, menu, vegtype, price }],
    } = post;
    const newPost = {
      id: posts.length,
      writer: {
        id: user.id,
        name: user.name,
        thumbNail: user.thumbNail,
      },
      createAt: '3초 전',
      favorite: false,
      store: {
        vegType,
        imgFiles,
        imgFileURLs,
        starRating,
        storeName,
        region,
        address,
        contactNum,
        operatingHours,
        operatingHoursMemo,
        menuList: [
          {
            id,
            menu,
            vegtype,
            price,
          },
        ],
      },

      reviewList: [],
    };
    setPosts([newPost, ...posts]);
  };

  const handleAddReview = (postId, review) => {
    const { imgFiles, imgFileURLs, starRating, title, contents, likes, likesOfMe, comments, commentList } = review;
    const newPosts = [...posts];
    const index = newPosts.findIndex((el) => el.id === postId);
    const post = newPosts[index];

    post.reviewList = [
      {
        id: post.reviews.length,
        writer: user,
        imgFiles,
        imgFileURLs,
        starRating,
        title,
        contents,
        likes,
        likesOfMe,
        commentList,
      },
      ...post.reviews,
    ];
    post.reviews = post.reviewList.length;
    setPosts(newPosts);
  };

  const handleAddComment = (postId, reviewId, contents) => {
    const newPosts = [...posts];
    const index = newPosts.findIndex((el) => el.id === postId);
    const post = newPosts[index];

    const newReviews = [...posts.reviews];
    const idx = newReviews.findIndex((el) => el.id === reviewId);
    const review = newReviews[idx];

    post[review].commentList = [
      {
        id: review.commentList.length,
        writer: user,
        createAt: '3초 전',
        contents,
      },
    ];
    post[review].comments = post[review].commentList.length;
    setPosts(newPosts);
  };

  const handleFavoritePost = (postId) => {
    const newPosts = [...posts];
    const index = newPosts.findIndex((el) => el.id === postId);
    const post = newPosts[index];
    post.favorite = !post.favorite;
    setPosts(newPosts);
  };

  const handleLikeReview = (postId, reviewId) => {
    const newPosts = [...posts];
    const index = newPosts.findIndex((el) => el.id === postId);
    const post = newPosts[index];

    const newReviews = [...posts.reviews];
    const idx = newPosts.findIndex((el) => el.id === reviewId);
    const review = newReviews[idx];

    !post[review].likesOfMe ? (post[review].likes += 1) : (post[review].likes -= 1);
    post[review].likesOfMe = !post[review].likesOfMe;
    setPosts(newPosts);
  };

  return (
    <Route
      {...rest}
      render={(props) => (
        <Wrap>
          <Header user={user} />
          <Component {...props} user={user} posts={posts} wikiPosts={wikiPosts} onAddPost={onAddPost} />
        </Wrap>
      )}
    />
  );
};

export default DefaultLayout;

const Wrap = styled.div`
  margin-top: 58px;
`;

const DUMMY_POSTS = [
  {
    id: 0,
    writer: { name: 'Harry', thumbNail: '' },
    createAt: '3초 전',
    favorite: false,
    store: {
      category: '식당',
      vegType: ['베지테리언'],
      files: [],
      starRating: 4.5,
      storeName: '발우공양',
      region: '서울',
      address: '서울특별시 중구 수표동 수표로 66',
      contactNum: '010-7318-1226',
      operatingHours: [
        '월요일 09:00 ~ 21:00',
        '화요일 09:00 ~ 21:00',
        '수요일 09:00 ~ 21:00',
        '목요일 09:00 ~ 21:00',
        '금요일 09:00 ~ 21:00',
        '토요일 09:00 ~ 21:00',
        '일요일 09:00 ~ 21:00',
      ],
      operatingHoursMemo: ['휴무일: 공휴일'],
      menuList: [
        {
          id: 0,
          menu: '어썸 버거',
          vegtype: ['비건'],
          price: 7000,
        },
        {
          id: 1,
          menu: '어썸 버거',
          vegtype: ['페스코'],
          price: 7000,
        },
        {
          id: 2,
          menu: '어썸 버거',
          vegtype: ['락토오보'],
          price: 7000,
        },
        {
          id: 3,
          menu: '어썸 버거',
          vegtype: ['락토오보'],
          price: 7000,
        },
      ],
    },
    reviewList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: '' },
        files: [],
        starRating: 5.0,
        title: '와!',
        reviewContents:
          'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
        likes: 1,
        likesOfMe: false,
        commentList: [
          {
            id: 0,
            writer: { name: 'Harry', thumbNail: '' },
            createAt: '3초 전',
            commentContents: '굉장해요!',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    writer: { name: 'Harry', thumbNail: '' },
    createAt: '3초 전',
    favorite: false,
    store: {
      category: '식당',
      vegType: ['비건'],
      files: [],
      starRating: 4.5,
      storeName: '발우공양',
      region: '서울',
      address: '서울특별시 중구 수표동 수표로 66',
      contactNum: '010-7318-1226',
      operatingHours: ['09:00 ~ 21:00'],
      operatingHoursMemo: ['휴무일: 공휴일'],
      menuList: [
        {
          id: 0,
          menu: '어썸 버거',
          vegtype: ['비건'],
          price: 7000,
        },
      ],
    },
    reviewList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: '' },
        files: [],
        starRating: 4.5,
        title: '와!',
        reviewContents:
          'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
        likes: 1,
        likesOfMe: false,
        commentList: [
          {
            id: 0,
            writer: { name: 'Harry', thumbNail: '' },
            createAt: '3초 전',
            commentContents: '굉장해요!',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    writer: { name: 'Harry', thumbNail: '' },
    createAt: '3초 전',
    favorite: false,
    store: {
      category: '식당',
      vegType: ['비건 옵션'],
      files: [],
      starRating: 4.5,
      storeName: '발우공양',
      region: '서울',
      address: '서울특별시 중구 수표동 수표로 66',
      contactNum: '010-7318-1226',
      operatingHours: ['09:00 ~ 21:00'],
      operatingHoursMemo: ['휴무일: 공휴일'],
      menuList: [
        {
          id: 0,
          menu: '어썸 버거',
          vegtype: ['비건'],
          price: 7000,
        },
      ],
    },
    reviewList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: '' },
        files: [],
        starRating: 4.5,
        title: '와!',
        reviewContents:
          'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
        likes: 1,
        likesOfMe: false,
        commentList: [
          {
            id: 0,
            writer: { name: 'Harry', thumbNail: '' },
            createAt: '3초 전',
            commentContents: '굉장해요!',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    writer: { name: 'Harry', thumbNail: '' },
    createAt: '3초 전',
    favorite: false,
    store: {
      category: '식당',
      vegType: ['베지테리언'],
      files: [],
      starRating: 4.5,
      storeName: '발우공양',
      region: '서울',
      address: '서울특별시 중구 수표동 수표로 66',
      contactNum: '010-7318-1226',
      operatingHours: ['09:00 ~ 21:00'],
      operatingHoursMemo: ['휴무일: 공휴일'],
      menuList: [
        {
          id: 0,
          menu: '어썸 버거',
          vegtype: ['비건'],
          price: 7000,
        },
      ],
    },
    reviewList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        files: [],
        starRating: 4.5,
        title: '와!',
        reviewContents:
          'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
        likes: 1,
        likesOfMe: false,
        commentList: [
          {
            id: 0,
            writer: { name: 'Harry', thumbNail: '' },
            createAt: '3초 전',
            commentContents: '굉장해요!',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
    createAt: '3초 전',
    favorite: false,
    store: {
      category: '식당',
      vegType: ['베지테리언'],
      files: [],
      starRating: 4.5,
      storeName: '발우공양',
      region: '서울',
      address: '서울특별시 중구 수표동 수표로 66',
      contactNum: '010-7318-1226',
      operatingHours: ['09:00 ~ 21:00'],
      operatingHoursMemo: ['휴무일: 공휴일'],
      menuList: [
        {
          id: 0,
          menu: '어썸 버거',
          vegtype: ['비건'],
          price: 7000,
        },
      ],
    },
    reviewList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        files: [],
        starRating: 4.5,
        title: '와!',
        reviewContents:
          'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
        likes: 1,
        likesOfMe: false,
        commentList: [
          {
            id: 0,
            writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
            createAt: '3초 전',
            commentContents: '굉장해요!',
          },
        ],
      },
    ],
  },
];

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
