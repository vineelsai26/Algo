"use client"

import { useState, useEffect } from 'react'

// @ts-ignore
import SeekBar from 'react-seekbar-component'
import 'react-seekbar-component/dist/index.css'

import { bubbleSort, insertionSort, heapSort, mergeSort, quickSort, selectionSort } from './algorithms'

export default function Sort({ params }: { params: { algorithm: string } }) {
    const algorithm = params.algorithm
    let algorithmName = params.algorithm

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

    useEffect(() => {
        document.title = `${algorithmName} | Sorting Algorithms`
    }, [algorithmName])

    let bar = []
    let [noOfBars, setNoOfBars] = useState(0)

    const barHeight = Array.from({ length: noOfBars }, () => Math.floor(Math.random() * 300))

    for (let i = 0; i < noOfBars; i++) {
        bar.push(
            <div id={i.toString()} key={i} style={{
                height: barHeight[i], 
                width: `${(100 / noOfBars)}%`,
                float: 'left', 
                backgroundColor: 'orange',
                border: '1px solid black',
                transition: 'height 0.2s ease-in-out'
            }} className='bar'></div>
        )
    }

    return (
        <div>
            <h1 className='text-center p-6 dark:text-white text-2xl'>{algorithmName}</h1>
            <div className='w-4/5 m-auto'>
                {bar}
            </div>
            <div className='p-10 mx-auto my-10 bottom-8 left-0 right-0 absolute w-4/5 flex flex-col'>
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
                <button className='relative w-1/5 m-auto my-4 text-center rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-white bg-blue-500 duration-300 hover:border-transparent hover:bg-blue-700 hover:text-white' onClick={() => { sort(algorithm) }}>Start</button>
            </div>
        </div>
    )
}

function sort(algorithm: string) {
    const bars = document.getElementsByClassName('bar') as HTMLCollectionOf<HTMLElement>

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
