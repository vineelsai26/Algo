import { useParams } from 'react-router-dom'
import { useWindowDimensions } from './WindowDimensions'
import NavBar from '../NavBar/NavBar'
import './Search.css'

export default function Search() {
    let { algorithm } = useParams()
    let algorithmName = algorithm

    if (algorithm === 'binary') {
        algorithmName = 'Binary Search'
    } else if (algorithm === 'exponential') {
        algorithmName = 'Exponential Search'
    } else if (algorithm === 'interpolation') {
        algorithmName = 'Interpolation Search'
    } else if (algorithm === 'jump') {
        algorithmName = 'Jump Search'
    } else if (algorithm === 'linear') {
        algorithmName = 'Linear Search'
    } else if (algorithm === 'ternary') {
        algorithmName = 'Ternary Search'
    } else {
        window.location.href = '/'
    }

    let grid = []
    const { height, width } = useWindowDimensions()

    let width1 = (width * 0.8) / 50
    let height1 = (height * 0.8) / 25

    for (let i = 1; i < 25; i++) {
        for (let j = 1; j < 50; j++) {
            grid.push(
                <button id={i + '-' + j} key={i + '-' + j} style={{
                    height: height1, width: width1,
                }} className='box' onClick={() => {
                    const btn = document.getElementById(i + '-' + j)
                    let start = true
                    let end = true
                    for (let k = 1; k < 25; k++) {
                        for (let l = 1; l < 50; l++) {
                            if (document.getElementById(k + '-' + l).classList.contains('selectedStart')) {
                                start = false
                            } else if (document.getElementById(k + '-' + l).classList.contains('selectedEnd')) {
                                end = false
                            }
                        }
                    }
                    if (start) {
                        if (btn.classList.contains('selectedEnd')) {
                            btn.classList.remove('selectedEnd')
                        } else if (btn.classList.contains('selectedStart')) {
                            btn.classList.remove('selectedStart')
                        } else {
                            btn.classList.add('selectedStart')
                        }
                    } else if (end) {
                        if (btn.classList.contains('selectedEnd')) {
                            btn.classList.remove('selectedEnd')
                        } else if (btn.classList.contains('selectedStart')) {
                            btn.classList.remove('selectedStart')
                        } else {
                            btn.classList.add('selectedEnd')
                        }
                    } else {
                        btn.classList.remove('selectedStart')
                        btn.classList.remove('selectedEnd')
                    }
                }}></button>
            )
        }
    }

    return (
        <div>
            <NavBar />
            <h1 className='centerTitle navBottom'>{algorithmName}</h1>
            <div className='center' style={{ height: height }}>
                {grid}
            </div>
            <div className='start'>
                <button className='startButton' onClick={() => { search(algorithm) }}>Start</button>
            </div>
        </div>
    )
}

function search(algorithm) {

}
