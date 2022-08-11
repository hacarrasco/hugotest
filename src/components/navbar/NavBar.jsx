import React from 'react';
import './NavBar.css';
import atomo from '../../media/atomo.png';
import html from "../../media/html.png";
import css from "../../media/css.png";
import node from "../../media/node.png";
import aws from "../../media/aws.jpg";
import js from "../../media/js.png";
import indice from "../../media/indice.png";
import mongo from "../../media/mongo.png";
import OffCanvas from '../offline/Offcanvas';

const NavBar = ({ isScrolling }) => {
 const toTheTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }



  return (
    <nav className={`navbar ${isScrolling > 30 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        <strong>Welcome to my Portfolio!!!</strong>
      </div>
      <ul class="nav justify-content-end" id='ocultar'>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
            <img src={atomo}></img>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
            <img src={html}></img>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
            <img src={css}></img>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
            <img src={js}></img>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
            <img src={aws}></img>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
            <img src={node}></img>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
            <img src={indice}></img>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
            <img src={mongo}></img>
          </a>
          <OffCanvas />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;