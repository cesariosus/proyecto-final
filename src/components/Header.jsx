import React from 'react'
import { FaBars } from "react-icons/fa";
import styleHeader from '../css/Header.module.css'
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCaretDown, FaCaretUp} from "react-icons/fa";

function Header() {
  const [classList, setClassList] = useState(styleHeader.oculto);

  const handleClick = () => {
    setClassList(classList === styleHeader.oculto ? styleHeader.desplegado : styleHeader.oculto);
  }
  
  return (
    <header>
      <nav className={styleHeader.nav} >
        <input type="checkbox" name="check" className={styleHeader.check} id="check" />
        <label htmlFor="check" className={styleHeader.checkbtn}><FaBars /></label>

        <Link to="/home">
          <article className={styleHeader.marca}> Reservas <span>Naturales</span>
            <img src="./assets/logo.svg" alt="" />
          </article>
        </Link>
  
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/conocenos">Conocenos</Link> 
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
              <ThemeToggle />
        </ul>
        <span onClick={handleClick} className={styleHeader.userIcon}> <FaUser size={20}/>
          {classList === styleHeader.oculto ? <FaCaretDown size={15}/> : <FaCaretUp size={15} />}
           
          <ul className={classList}>
            <li>
              <Link to="/logIn">Ingresar</Link>
            </li>
            <li>
              <Link to="/signUp">Registrarse</Link>
            </li>
          </ul>
        </span>
      </nav>
    </header>
  )
}

export default Header