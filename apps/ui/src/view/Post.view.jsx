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
        <Element><input type="submit" class="Like" value="Like"/>Likes: {fakePosts[0].likes}</Element>
        <Element><input type="text" /><input type="submit" class="Comment" value="Comment"/></Element>
        <Element><button>View Comments</button></Element>
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
background: #ccc;
align-items: center;
justify-content: center;
font-size: 2rem;
border: 20px solid #EDFFEF;
font-family: "Yanone Kaffeesatz";
`;

const Element = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 3px;
  background: #eee;
  border: 1px solid black;
  &:hover {
    background: #FFFFFF;
    transition: 0.1s;
  }
  border-radius: 10px;
  font-family: "Yanone Kaffeesatz";
`;

const SinglePost = styled.div`
  background: #EDFFEF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid pink;
  border-radius:10px;
  &:hover {
    background: #FFFFFF;
    transition: 0.1s;
  }
  margin:10px;
`;