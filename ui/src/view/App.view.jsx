import React from "react";
import styled from "styled-components";
import Post from "./Post.view";


const App = () => {
    return (
        <Box>
            <h1>fff</h1>
            <Post />
        </Box>
    );
};
export default App;

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
