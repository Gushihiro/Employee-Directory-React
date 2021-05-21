import React from 'react'


export default function SortButton({handleSort}) {
  return (
    <button className="btn btn-primary" onClick={() => handleSort()}>
      Sort By First Name
    </button>
  )
}
