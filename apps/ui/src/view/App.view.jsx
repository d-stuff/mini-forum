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
  justify-content: center;
  align-items: center;
`;
