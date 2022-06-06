import React, { useState } from "react"
import "./Dot.css"

const Dot = ({ index }) => {
  // TODO: put your code here

  const [bgColor, setBgColor] = useState("#000000")

  const handleChangeBackgroundColor = (e, id) => {
    const selectedDot = e.target
    const dots = document.querySelectorAll(".dot")
    dots.forEach(dot => {
      dot.innerHTML = ""
      dot.style.backgroundColor = "#000000"
    })
    setBgColor("#" + Math.floor(Math.random() * 16777215).toString(16))
    selectedDot.innerHTML = id
  }

  const handleHoverOnDot = e => {
    const hoveredDot = e.target
    if (hoveredDot.style.backgroundColor === "rgb(0, 0, 0)") {
      setBgColor("#e8353f")
    }
  }

  const handleMouseLeave = e => {
    const leaveDot = e.target
    if (leaveDot.style.backgroundColor === "rgb(232, 53, 63)") {
      setBgColor("#000000")
    }
  }

  return (
    <div
      className="dot"
      style={{ backgroundColor: bgColor }}
      onClick={e => {
        handleChangeBackgroundColor(e, index)
      }}
      onMouseOver={handleHoverOnDot}
      onMouseLeave={handleMouseLeave}
    />
  )
}

export default Dot
