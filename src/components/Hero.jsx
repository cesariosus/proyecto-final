import React from "react";
import styled from "styled-components";
import homeImage from "../assets/hero.png";

export default function Hero() {
  return (
    <Section id="hero">
      <section className="background">
        <img src={homeImage} alt="" />
      </section>
      <section className="content">
        <section className="title">
          <h1>Atrévete a explorar nuevos horizontes</h1>
          <p>
            Colombia cuenta con diversas reservas naturales que ofrecen una
            gran variedad de flora y fauna, así como paisajes impresionantes.
            Estas áreas protegidas son ideales para practicar turismo ecológico
            y disfrutar de la naturaleza.
          </p>
        </section>
        <section className="search">
          <button onClick={() => window.location.href = "/posts"}>¡Explora ahora!</button>
        </section>
      </section>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      width:auto; 
      padding :0.5rem; 
 align-items:center; 
 background-color:#ffffffce; 
 border-radius :0.5rem; 
 button{
 padding :1rem; 
 cursor:pointer; 
 border-radius :0.3rem; 
 border:none; 
 color:white; 
 background-color:#4361ee; 
 font-size :1.1rem; 
 text-transform :uppercase; 
 transition :0.3s ease-in-out; 
 &:hover{
 background-color:#023e8a; 
 }
 }
 }
 }
@media screen and (min-width :280px) and (max-width :980px){
height :25rem; 
.background{
background-color:palegreen; 
img{
height :100%; 
}
}
.content{
.title{
h1{
font-size :1rem; 
}
p{
font-size :0.8rem; 
padding :1vw; 
}
}
.search{
flex-direction :column; 
padding :0.8rem; 

button{
padding :1rem; 
font-size :1rem; 

}
}
}
@media screen and (min-width: 2560px) and (max-height: 1080px) {
 .content {
 .search {
 width:auto;
 border-radius: 15px;
 button {
 font-size: 2rem;
 padding: 2rem;
 }
 }
 }
}
`;

