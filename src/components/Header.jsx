import React from 'react'
import chef from '../assets/chef-claude-icon.png'
import '../App.css'

function Header() {
    // console.log(chef)
  return (
    <header>
      <img src={chef} alt="chef-claude-icon" />
      <span>AI Chef</span>
    </header>
  )
}

export default Header
