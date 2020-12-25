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
      createAt: new Date(),
      favorites: false,
      store: {
        category: '식당',
        vegType: [],
        imgFiles: [],
        imgFileURLs: [],
        starRating: '⭐⭐⭐⭐⭐',
        storeName: '발우공양',
        region: '서울',
        address: '서울특별시 중구 수표동 수표로 66',
        contactNum: '010-7318-1226',
        operatingHours: [],
        menuList: [
          {
            id: 0,
            menu: '어썸 버거',
            vegtype: [],
            price: 7000,
          },
        ],
      },
      reviews: 0,
      reviewList: [
        {
          id: 0,
          imgFiles: [],
          imgFileURLs: [],
          starRating: '⭐⭐⭐⭐⭐',
          title: '와!',
          contents:
            'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
          likes: 1,
          likesOfMe: false,
          comments: [
            {
              id: 0,
              writer: user,
              createAt: new Date(),
              contents: '굉장해요!',
            },
          ],
        },
      ],
    },
  ];

  const [posts, setPosts] = useState(DUMMY_LIST);
  // const [posts, setPosts] = useState(loadPosts());

  useEffect(() => {
    savePosts(posts);
  }, [posts]);

  const onAddPost = (post) => {
    console.log(post);
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
      menuList: [{ id, menu, vegtype, price }],
    } = post;
    const newPost = {
      id: posts.length,
      writer: {
        id: user.id,
        name: user.name,
        profileImgURL: user.profileImgURL,
      },
      createAt: new Date(),
      favorites: false,
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
        menuList: [
          {
            id,
            menu,
            vegtype,
            price,
          },
        ],
      },
      reviews: 0,
      reviewList: [],
    };
    setPosts([newPost, ...posts]);
  };

  const handleAddReview = (postId, review) => {
    const { imgFiles, imgFileURLs, starRating, title, contents, likes, likesOfMe, comments } = review;
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
        comments,
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

    post[review].comments = [
      {
        id: review.comments.length,
        writer: user,
        createAt: new Date(),
        contents,
      },
    ];
    post[review].comments = post[review].commentList.length;
    setPosts(newPosts);
  };

  const handleFavoritesPost = (postId) => {
    const newPosts = [...posts];
    const index = newPosts.findIndex((el) => el.id === postId);
    const post = newPosts[index];
    post.favorites = !post.favorites;
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
          <Component {...props} user={user} posts={posts} onAddPost={onAddPost} />
        </Wrap>
      )}
    />
  );
};

export default DefaultLayout;

const Wrap = styled.div`
  margin-top: 58px;
`;

const DUMMY_LIST = [
  {
    id: 0,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=A',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=A',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 1,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=B',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=B',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 2,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=C',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=C',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 3,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=D',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=D',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 4,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=E',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=E',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 5,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=F',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=F',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 6,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=G',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=G',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 7,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=H',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=H',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 8,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=I',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=I',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 9,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=J',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=J',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 10,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=K',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=K',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
];
