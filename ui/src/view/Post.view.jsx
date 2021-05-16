import React from "react";
import styled from "styled-components";
import Comment from "./Comment.view";


const Post = () => {
  return (
    <Box>
      <Paragraph>Author</Paragraph>
      <Paragraph>Date</Paragraph>
      <Paragraph>Likes</Paragraph>
      <Content>Content</Content>
      <Btn>Like</Btn>
      <Btn>Comment</Btn>
      <Btn>Edit</Btn>
      <Btn>Delete</Btn>
      <Comment/>
    </Box>
  );
};
export default Post;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center;
  background: #ddd;
  border: 1px solid #D291BC;
  margin: 10px;
  padding: 15px;
`;

const Btn = styled.button`
  font-family: "Bodoni MT", Didot, "Didot LT STD", "Hoefler Text"; 
  background: #eee;
  border: 1px solid #D291BC;
  display: inline;
  padding: 3px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
  `;

const Paragraph = styled.p`
  padding:3px;
  border: 1px solid #D291BC;
  background: #eee;
  &:hover {
    background-color: lightblue;
  }
`;

const Content = styled.h1`
padding:15px;
border: 1px solid #D291BC;
background: #eee;
&:hover {
  background-color: lightblue;
}
`;
