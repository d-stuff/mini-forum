import React from "react";
import styled from "styled-components";
import Post from "./Post.view";


const App = () => {
    return (
        <Box>
            <Post />
        </Box>
    );
};
export default App;

const Box = styled.div`
  font-family: "Bodoni MT", Didot, "Didot LT STD", "Hoefler Text"; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ccc;
`;
