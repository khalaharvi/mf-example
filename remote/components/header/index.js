import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElements'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink href="/home" >
            Home
          </MenuLink>
          <MenuLink href="/about" >
            About
          </MenuLink>
          <MenuLink href="/products" >
            Products
          </MenuLink>
          <MenuLink href="/blog" >
            Blog
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar