import React from 'react'

export default function FilterButton({handleInputChange}) {
  return (
    <button className="btn btn-primary" onClick={() => handleInputChange()}>
      Filter By Males
    </button>
  )
}
