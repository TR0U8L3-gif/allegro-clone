import React from 'react'
import './Nav.css'
import {Link} from "react-router-dom"
function Nav() {
  return (
    <>
    <header>
      <div className="header__container">
        <Link to="/">
          <img src="https://a.allegroimg.com/original/1201da/b8806483460d99ec3739941289ab" alt="Allegro.pl - wygodne i bezpieczne zakupy online, największy wybór ofert"></img>
        </Link>
        <div className="header__form">
          <input type="text" className="header__search" placeholder="czego szukasz?"/>
          <button type="submit" className="header_search__btn">SZUKAJ</button>
        </div>
        <div className="header__options">
          <img className='header__localization' src="https://a.allegroimg.com/original/12f062/2fe911ce48a0834185423b139ac6" alt=""></img>
          <Link to="/watched">
            <img src="https://assets.allegrostatic.com/metrum/icon/star-empty-2c3f1d6b0f.svg" alt=""></img>
          </Link>
          <img src="https://assets.allegrostatic.com/metrum/icon/chat-8dd2f8c308.svg" alt=""></img>
          <img src="https://assets.allegrostatic.com/metrum/icon/bell-034065f63b.svg" alt=""></img>
          <Link to="/cart">
            <div className="header__bascet">
              <img src="https://assets.allegrostatic.com/metrum/icon/bag-c9f42da6df.svg" alt="Koszyk"></img>
              <div className="header__itemcount">1</div>
            </div>
          </Link>
          <Link to="/login">
            <img src="https://assets.allegrostatic.com/metrum/icon/user-0135502fa4.svg" alt="" ></img>
          </Link>
        </div>
      </div>
    </header>  
    </>
  )
}

export default Nav