import { useState } from 'react'
import { useParams } from 'react-router-dom'

import SeekBar from 'react-seekbar-component'
import 'react-seekbar-component/dist/index.css'

import NavBar from '../NavBar/NavBar'
import { bubbleSort, insertionSort, heapSort, mergeSort, quickSort, selectionSort } from './SortingAlgorithms'
import './Sort.css'

export default function Sort() {
    let { algorithm } = useParams()
    let algorithmName = algorithm

    if (algorithm === 'bubble') {
        algorithmName = 'Bubble Sort'
    } else if (algorithm === 'insertion') {
        algorithmName = 'Insertion Sort'
    } else if (algorithm === 'selection') {
        algorithmName = 'Selection Sort'
    } else if (algorithm === 'merge') {
        algorithmName = 'Merge Sort'
    } else if (algorithm === 'quick') {
        algorithmName = 'Quick Sort'
    } else if (algorithm === 'heap') {
        algorithmName = 'Heap Sort'
    } else {
        window.location.href = '/'
    }

    document.title = `${algorithmName} | Sorting Algorithms`

    let bar = []
    let [noOfBars, setNoOfBars] = useState('')

    const barHeight = Array.from({ length: noOfBars }, () => Math.floor(Math.random() * 300))

    for (let i = 0; i < noOfBars; i++) {
        bar.push(<div id={i} key={i} style={{
            height: barHeight[i], width: `${(100 / noOfBars) - 0.33}%`,
        }} className='bar'></div>)
    }

    return (
        <div>
            <NavBar />
            <h1 className='centerTitle navBottom'>{algorithmName}</h1>
            <div className='graph'>
                {bar}
            </div>
            <div className='seekBar'>
                <button className='startButton' onClick={() => { sort(algorithm) }}>Start</button>
                <SeekBar
                    getNumber={setNoOfBars}
                    backgroundColor='gray'
                    fillColor='red'
                    fillSecondaryColor='blue'
                    headColor='white'
                    headShadow='gray'
                    headShadowSize={6}
                    progress={0}
                />
            </div>
        </div>
    )
}

function sort(algorithm) {
    const bars = document.getElementsByClassName('bar')
    if (algorithm === 'bubble') {
        bubbleSort(bars)
    } else if (algorithm === 'insertion') {
        insertionSort(bars)
    } else if (algorithm === 'selection') {
        selectionSort(bars)
    } else if (algorithm === 'merge') {
        mergeSort(bars, 0, bars.length - 1)
    } else if (algorithm === 'quick') {
        quickSort(bars, 0, bars.length - 1)
    } else if (algorithm === 'heap') {
        heapSort(bars)
    }
}
