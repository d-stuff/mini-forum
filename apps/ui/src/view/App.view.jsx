import React from "react";
import styled from "styled-components";
import Post from "./Post.view";
import {useRoutes} from 'hookrouter';


const routes = {
    '/' :()=><Home/>,
    '/post/:postId' :(postId)=> <Post id={postId}/>,
   };


const App = () => {
    const routeResult = useRoutes(routes);

    return (
        <Box>
            {routeResult}
        </Box>
    );
};
export default App;

const Box = styled.div`
  justify-content: center;
  align-items: center;
`;
