import React from 'react'
// import "./nav.css";
import NavAvtar from './NavAvtar';
import NavLogOut from './NavLogOut';
const Nav = () => {
  return (
    <>
      <nav className='header-nav ms-auto'>
        <ul className='d-flex align-item-center mt-3'>
          <NavAvtar />
          <NavLogOut />
        </ul>
      </nav>
    </>
  )
}

export default Nav
