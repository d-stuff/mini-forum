import React from "react";
import styled from "styled-components";
// import Post from "./Post.view";
import Home from "./Home.view";
import NoMatch from "./NoMatch.view"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const Links = () => (
    <Nav>
        <li>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="wrong">Wrong</StyledLink>
        </li>
    </Nav>
);

const App = () => (
    <Router>
        <Box>
            <div>
                <Links />
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NoMatch} />
            </Switch>
        </Box>
    </Router>

);
export default App;

const Box = styled.div`
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: black;
  padding 0px 5px;
  background:#ccc;
`;

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 1.5rem;
  width: 15rem;
  justify-content: space-between;
`;