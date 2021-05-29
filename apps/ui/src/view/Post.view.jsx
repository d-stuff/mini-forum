import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"
// import { comment } from "../state/posts.slice"
import { fakePosts } from "../api/posts.api"
import postsSlice from "../state/posts.slice";




const Post = () => {
  const dispatch = useDispatch();
  // const {} = useSelector(state => posts.state);
  //onClick={() => dispatch(comment())}
  return (
    <Box>
      <SinglePost>
        <Content>Content: {fakePosts[0].content}</Content>
        <PostData>
        <Element>Author: {fakePosts[0].author}</Element>
        <Element>Likes: {fakePosts[0].likes}</Element>
        {/* <button onClick={()=>dispatch(comment())}>Comments</button> */}
        <Element>Uploaded: {fakePosts[0].timeOfUpload}</Element>
        </PostData>
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

const PostData = styled.div`
display: flex;
align-items: stretch;
`;

const Content = styled.p`
display: flex;
color:white;
background: black;
align-items: center;
justify-content: center;
font-size: 2rem;
`;

const Element = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #eee;
  border: 1px solid black;
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