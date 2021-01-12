import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import apis from '../../Service/apis';
import WriterProfile, { WriterProfileWrap } from '../profile/WriterProfile';
import history from '../../history';

const Comment = ({ reviewId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // const getApiData = async () => {
    //   try {
    //     const storeId = history.location.pathname.split('/')[2];
    //     const reviewId = commentData.id;
    //     const data = await apis.storeApi.getComments({ storeId, reviewId });
    //     setComments(data);
    //   } catch (err) {
    //     console.log(err.response && err.response.data);
    //   }
    // };
    // getApiData();
    const storeId = history.location.pathname.split('/')[2];

    apis.storeApi
      .getComments({ storeId, reviewId })
      .then((data) => {
        setComments(data);
      })
      .catch((err) => {
        console.log(err.response && err.response.data);
      });
  }, [reviewId]);

  return (
    <>
      {comments.map((comment) => (
        <Wrap key={comment.id}>
          <WriterProfile writer={comment.writer} createdAt={comment.createdAt} />
          <p className="comment">{comment.contents}</p>
        </Wrap>
      ))}
    </>
  );
};

export default Comment;

const Wrap = styled.li`
  padding: 5px 15px 10px;
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.background[2]};

  ${WriterProfileWrap} {
    a {
      color: ${(props) => props.theme.color[0]};
    }
  }
  .comment {
    padding-left: 38px;
  }
`;
