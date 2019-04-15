import React, { Component } from "react";
import "./App.css";
import Three from "./component/three";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div > h1,
  h2,
  h3,
  h4 {
    font-style: italic;
  }
`;

const App = () => {
  return (
    <MainContainer>
      <h2>Three</h2>
      <Three />
    </MainContainer>
  );
};

export default App;
