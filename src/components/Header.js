import React from 'react'
import logo from '../images/coffee-cup.png'

function Header() {
  return (
    <header className="header">
      <div className="header__contents">
        <div className="header__contents__logo">
          <img
            className="header__contents__logo__img"
            src={logo}
            alt="coffee cup logo"
          />
          <h1 className="header__contents__logo__txt">Caffeinated Weather</h1>
        </div>

        <a
          className="header__contents__link"
          href="https://openweathermap.org/api"
        >
          powered by the <br /> Open Weather API
        </a>
      </div>
    </header>
  )
}

export default Header
