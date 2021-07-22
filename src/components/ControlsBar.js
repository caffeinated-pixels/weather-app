import React, { useState } from 'react'
import SearchBar from './SearchBar'
import UnitsButtons from './UnitsButtons'

export default function ControlsBar() {
  const [menuOpen, setIsMenuOpen] = useState(false)

  console.log('location bar render')

  const handleMenuBtnClick = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <div className="locationbar">
      {menuOpen ? <UnitsButtons /> : <SearchBar />}
      <i
        className="locationbar__icon fas fa-caret-square-down"
        onClick={handleMenuBtnClick}
      ></i>
    </div>
  )
}
