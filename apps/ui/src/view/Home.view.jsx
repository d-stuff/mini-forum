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
  background: white;
  border: 2px solid pink;
  padding: 0px 15rem;
  border-radius:10px;
`;

const Subject = styled.h2`
  background: #ccc;
  border: 2px solid #pink;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:3px;
  font-family: "Yanone Kaffeesatz";
`;