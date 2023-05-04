import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
import avatarImage2 from "../assets/avatarImage2.webp";
import avatarImage3 from "../assets/avatarImage3.webp";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Section className="title">
        <h2>Testimonios de Viajeros</h2>
      </Section>
      <Section className="testimonials">
        <Section className="testimonial">
          <p>
            "Nunca había estado tan maravillado con la naturaleza como cuando
            visité las reservas naturales de Colombia. Ver los majestuosos
            árboles, los hermosos ríos y las impresionantes montañas me dejó sin
            palabras."
          </p>
          <Section className="info">
            <img src={avatarImage2} alt="" />
            <Section className="details">
              <h4>María Pérez</h4>
              <span>Argentina</span>
            </Section>
          </Section>
        </Section>
        <Section className="testimonial">
          <p>
            "Mi viaje a las reservas naturales de Colombia fue una experiencia
            que nunca olvidaré. Desde las impresionantes vistas hasta los
            sonidos de la naturaleza que me rodeaban, todo fue increíble.
            Realmente me sentí en paz y conectado con el mundo natural."
          </p>
          <Section className="info">
            <img src={avatarImage} alt="" />
            <Section className="details">
              <h4>Lucas González</h4>
              <span>Uruguay</span>
            </Section>
          </Section>
        </Section>
        <Section className="testimonial">
          <p>
            "Explorar las reservas naturales de Colombia fue una aventura
            emocionante que nunca olvidaré. Desde caminar por senderos rodeados
            de árboles hasta descubrir hermosas cascadas y ríos, cada día fue
            una experiencia única."
          </p>
          <Section className="info">
            <img src={avatarImage3} alt="" />
            <Section className="details">
              <h4>Carla Fernández</h4>
              <span>México</span>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
    background-color: aliceblue;
    width:100px
    justify-content: center;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
