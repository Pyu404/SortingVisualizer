import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebar_option">
    <label >Algorithm: </label>
    <select>
    <option>Bubble Sort</option>
    <option>Selection Sort</option>
    <option>Insertion Sort</option>
    <option>Merge Sort</option>
    <option>Quick Sort</option>
    </select>
    </div>

    <div className='sidebar_option'>
    <label>Range: </label>
    </div>

    <div className="sidebar_option">
    <label> Color : </label>
    <select>
    <option>Black</option>
    <option>Blue</option>
    <option>Green</option>
    <option>Yellow</option>
    <option>Red</option>
    </select>
    </div>

    <div className="sidebar_option">
    <label>Speed : </label>
    <select>
    <option>Slow</option>
    <option>Medium</option>
    <option>Fast</option>
    <option>Super Fast</option>
    </select>
    
    </div>

    
    </div>
  )
}

export default Sidebar