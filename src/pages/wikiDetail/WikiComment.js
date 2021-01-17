import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import wikiDetailActions from '../../redux/actions/wikiDetailActions';
import Loading from '../../components/loading/Loding';
import CommentForm, { CommentFormWrap } from '../../components/commentForm/CommentForm';
import Comment from './Comment';

const WikiComment = () => {
  const dispatch = useDispatch();
  const { isFetching, data } = useSelector((state) => state.wikiDetail);
  const { id, comments, commentList } = data;
  console.log(data.commentList);

  if (isFetching) return <Loading />;

  const onCreateComment = (contents) => {
    dispatch(wikiDetailActions.createWikiComment({ wikiId: id, contents }));
  };

  const onDeleteComment = (commentId) => {
    console.log('here', commentId);
    dispatch(wikiDetailActions.deleteWikiComment({ wikiId: id, commentId }));
  };

  return (
    <Wrap>
      <strong className="totalComments">{comments} 개의 댓글</strong>
      <div className="innerContainer">
        <CommentForm onCreateComment={onCreateComment} />
        <ul className="comments">
          <Comment commentData={commentList} onDeleteComment={onDeleteComment} />
        </ul>
      </div>
    </Wrap>
  );
};

export default WikiComment;

const Wrap = styled.div`
  margin-top: 50px;
  padding: 0 1.5rem;

  .totalComments {
    display: block;
    margin-bottom: 50px;
  }
  .innerContainer {
    width: 100%;
    max-width: 768px;
    margin: 0 auto 25px;
    padding-top: 15px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.background[1]};
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

    .comments {
      padding: 0px 15px;
      overflow: hidden;
    }

    ${CommentFormWrap} {
      .userThumbnail {
        width: 30px;
        height: 30px;
        margin: 8px 8px 0 0;
      }
      form {
        input {
          height: 40px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    margin-top: 80px;
  }
`;
