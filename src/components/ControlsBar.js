import React, { useState } from 'react'
import SearchBar from './SearchBar'
import UnitsButtons from './UnitsButtons'

export default function ControlsBar() {
  const [menuOpen, setIsMenuOpen] = useState(false)

  const iconClass = menuOpen
    ? 'far fa-caret-square-up'
    : 'fas fa-caret-square-down'

  const handleMenuBtnClick = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <div className="locationbar">
      {menuOpen ? <UnitsButtons /> : <SearchBar />}
      <button
        className="icon-button"
        onClick={handleMenuBtnClick}
        aria-label="toggle menu"
      >
        <i className={`locationbar__icon ${iconClass}`}></i>
      </button>
    </div>
  )
}
