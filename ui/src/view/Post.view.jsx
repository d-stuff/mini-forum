import React from "react";
import styled from "styled-components";


const Post = () => {
  return (
    <Box>
        <h1>Post</h1>
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
