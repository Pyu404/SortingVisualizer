import React from 'react'
import BubbleSort from './BubbleSort'
import SelectionSort from './SelectionSort'
import InsertionSort from './InsertionSort'
import  MergeSort from './MergeSort'
import QuickSort from './QuickSort'

function Visuals() {
  return (
    <div className="visuals">
    <div className="visualizer">
    <div className="visual_items">
    
    </div>
    </div>

    <div className="visual_btns">
    <button>change values</button><br></br>
    <button>play</button>
    </div>
    <BubbleSort></BubbleSort>
    <SelectionSort></SelectionSort>
    <InsertionSort></InsertionSort>
    <MergeSort></MergeSort>
    <QuickSort></QuickSort>

    </div>
  )
}

export default Visuals