import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"




const Post = ({ content, author, likes, timeOfUpload }) => {
  const dispatch = useDispatch();
  // const {content, author, likes, timeOfUpload} = useSelector(state => state.posts)
  //onClick={() => dispatch(comment())}
  return (
    <Box>
      <SinglePost>
        <h2>{content}</h2>
        <p>{author}</p>
        <p>{likes}</p>
        <button>Comments</button>
        <p>{timeOfUpload}</p>
      </SinglePost>
    </Box>
  );
};
export default Post;

const Box = styled.div`
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:3px;
`;

const SinglePost = styled.div`
  background: #EDFFEF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid pink;
  &:hover {
    background: #FFFFFF;
    transition: 0.1s;
  }
`;