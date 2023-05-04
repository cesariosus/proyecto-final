import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/flecha.png";
export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <ToTop onClick={toTop} scrollState={scrollState}>
      <img src={logo} alt="" />
    </ToTop>
    
  );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 10;
  right: 2rem;
  img {
    height: 1.5rem;
  }
  border-radius: 5rem;
  background-color: #white;
  padding: 1rem;
  bottom: 100;
  
`;

