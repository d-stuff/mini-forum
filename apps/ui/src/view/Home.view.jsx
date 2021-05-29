import React from "react";
import styled from "styled-components";
import Post from "./Post.view"
import Hello from "./Hello.view"


const Home = () => {
  return (
    <Box>
        <SinglePost>
          <Subject>I am a Mini Forum</Subject>
          <Hello/>
          <Post/>
          <Post/>
          <Post/>
        </SinglePost>
    </Box>
  );
};
export default Home;

const Box = styled.div`
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const SinglePost = styled.div`
  background: #DDF1FF;
  border: 2px solid pink;
`;

const Subject = styled.h2`
  background: #E0BBE4;
  border: 2px solid #pink;
`;