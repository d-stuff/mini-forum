import React from "react";
import styled from "styled-components";


const Comment = () => {
  return (
    <Box>
      <p>Comments</p>
    </Box>
  );
};
export default Comment;

const Box = styled.div`
    background: pink;
    &:hover {
        background-color: lightblue;
      }
`;
