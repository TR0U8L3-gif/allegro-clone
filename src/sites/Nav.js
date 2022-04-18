import React from 'react'
import './Nav.css'
import {Link} from "react-router-dom"
function Nav() {
  return (
    <>
    <header>
      <div className="container">
        <Link to="/">
          <img src="https://a.allegroimg.com/original/1201da/b8806483460d99ec3739941289ab" alt="Allegro.pl - wygodne i bezpieczne zakupy online, największy wybór ofert"></img>
        </Link>
        <div className="form">
          <input type="text" className="search" placeholder="czego szukasz?"/>
          <button type="submit" className="btn">SZUKAJ</button>
        </div>
        <div className="options">
          <img width="28" height="28" src="https://a.allegroimg.com/original/12f062/2fe911ce48a0834185423b139ac6" alt=""></img>
          <img src="https://assets.allegrostatic.com/metrum/icon/star-empty-2c3f1d6b0f.svg" alt=""></img>
          <img src="https://assets.allegrostatic.com/metrum/icon/chat-8dd2f8c308.svg" alt=""></img>
          <img src="https://assets.allegrostatic.com/metrum/icon/bell-034065f63b.svg" alt=""></img>
          <img src="https://assets.allegrostatic.com/metrum/icon/bag-c9f42da6df.svg" alt="Koszyk"></img>
          <img src="https://assets.allegrostatic.com/metrum/icon/user-0135502fa4.svg" alt="" ></img>
        </div>
      </div>
    </header>  
    </>
  )
}

export default Nav