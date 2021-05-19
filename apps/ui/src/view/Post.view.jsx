import React from "react";
import styled from "styled-components";


const Post = () => {
  return (
    <Box>
        <SinglePost>
          <h2>Post content</h2>
          <p>author</p>
          <p>likes</p>
          <p>comments</p>
          <p>time of upload</p>
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
  /* justify-content: center; */
  align-items: center;
  padding-top: 15rem;
`;

const SinglePost = styled.div`
  background: #ccc;
  border: 2px solid pink;
`;