import React, { useRef, useLayoutEffect, RefObject } from "react";
import styled from "styled-components";
import * as THREE from "three";

const MainContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: #e5e5e5;
  margin: 1em;
`;

export const ThreeView = () => {
  const myRef: RefObject<HTMLDivElement> | null = useRef(null);

  useLayoutEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(500, 500);

    myRef && myRef.current && myRef.current.appendChild(renderer.domElement);
  });

  return <MainContainer ref={myRef} />;
};

export default ThreeView;
