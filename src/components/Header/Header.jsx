import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ]

  return (
    <header className="bg-gray shadow-md w-full">
      <Container>
        <nav className="flex items-center justify-between py-4 px-4">
          
          {/* Logo */}
          <div>
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-5 py-2 rounded-full text-black hover:bg-blue-500 duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-3">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => {
                          navigate(item.slug)
                          setMenuOpen(false)
                        }}
                        className="w-full text-left px-4 py-2 rounded-lg text-white hover:bg-blue-500 duration-200"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}

              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header