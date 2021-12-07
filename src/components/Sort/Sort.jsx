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
        insertionSort(bars)
    } else if (algorithm === 'selection') {
        selectionSort(bars)
    } else if (algorithm === 'merge') {

    } else if (algorithm === 'quick') {

    } else if (algorithm === 'heap') {

    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function swap(bars, i, j) {
    let temp = bars[i].style.height
    bars[i].style.height = bars[j].style.height
    bars[j].style.height = temp
}

async function bubbleSort(bars) {
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = 'red'
            bars[j + 1].style.backgroundColor = 'red'
            const height1 = parseInt(bars[j].style.height.replace('px', ''))
            const height2 = parseInt(bars[j + 1].style.height.replace('px', ''))
            if (height1 > height2) {
                swap(bars, j, j + 1)
                await sleep(1000 / bars.length)
            }
            bars[j].style.backgroundColor = 'orange'
            bars[j + 1].style.backgroundColor = 'orange'
        }
    }
}

async function insertionSort(bars) {
    let i, j, temp
    for (i = 1; i < bars.length; i++) {
        temp = parseInt(bars[i].style.height.replace('px', ''))
        j = i - 1
        while (j >= 0 && parseInt(bars[j].style.height.replace('px', '')) > temp) {
            bars[j].style.backgroundColor = 'red'
            bars[j + 1].style.backgroundColor = 'red'
            bars[j + 1].style.height = bars[j].style.height
            await sleep(1000 / bars.length)
            bars[j].style.backgroundColor = 'orange'
            bars[j + 1].style.backgroundColor = 'orange'
            j -= 1
        }
        bars[j + 1].style.height = `${temp}px`
        bars[j + 1].style.backgroundColor = 'orange'
    }
}

async function selectionSort(bars) {
    let i, j, min

    for (i = 0; i < bars.length - 1; i++) {
        min = i
        for (j = i + 1; j < bars.length; j++) {
            if (parseInt(bars[j].style.height.replace('px', '')) < parseInt(bars[min].style.height.replace('px', ''))) {
                min = j
                bars[min].style.backgroundColor = 'red'
                await sleep(1000 / bars.length)
            }
        }

        bars[min].style.backgroundColor = 'red'
        bars[i].style.backgroundColor = 'red'

        swap(bars, i, min)

        await sleep(1000 / bars.length)

        bars[min].style.backgroundColor = 'orange'
        bars[i].style.backgroundColor = 'orange'
    }
}
