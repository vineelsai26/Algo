import { useState } from 'react'
import { useParams } from 'react-router-dom'

import SeekBar from 'react-seekbar-component'
import 'react-seekbar-component/dist/index.css'

import NavBar from '../NavBar/NavBar'
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

    } else if (algorithm === 'selection') {

    } else if (algorithm === 'merge') {

    } else if (algorithm === 'quick') {

    } else if (algorithm === 'heap') {

    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function bubbleSort(bars) {
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = 'red'
            bars[j + 1].style.backgroundColor = 'red'
            const height1 = parseInt(bars[j].style.height.replace('px', ''))
            const height2 = parseInt(bars[j + 1].style.height.replace('px', ''))
            if (height1 > height2) {
                let temp = bars[j].style.height
                bars[j].style.height = bars[j + 1].style.height
                bars[j + 1].style.height = temp
                await sleep(1000 / bars.length)
            }
            bars[j].style.backgroundColor = 'orange'
            bars[j + 1].style.backgroundColor = 'orange'
        }
    }
}
