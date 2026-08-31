import React, { useState } from 'react'

const DarkModeToggle = ({darkMode,setDarkMode}) => {
  function changeMode(){
    setDarkMode(darkMode === 'Dark mode' ? "Light mode":  "Dark mode") 
  }

  return (
    <button onClick={changeMode} >Toggle {darkMode}</button>
  )
}

export default DarkModeToggle
