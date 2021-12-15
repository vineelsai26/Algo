import { useParams } from 'react-router-dom'
import { useWindowDimensions } from './WindowDimensions'
import NavBar from '../NavBar/NavBar'
import './Search.css'

export default function Search() {
    let { algorithm } = useParams()
    let algorithmName = algorithm

    if (algorithm === 'dijkstra') {
        algorithmName = `Dijkstra's Algorithm`
    } else if (algorithm === 'a*') {
        algorithmName = 'A* Search'
    } else if (algorithm === 'greedy') {
        algorithmName = 'Greedy BFS'
    } else if (algorithm === 'swarm') {
        algorithmName = 'Swarm Algorithm'
    } else if (algorithm === 'convergent') {
        algorithmName = 'Convergent Swarm Algorithm'
    } else if (algorithm === 'bidirectional') {
        algorithmName = 'Bidirectional Swarm Algorithm'
    } else if (algorithm === 'bfs') {
        algorithmName = 'BFS'
    } else if (algorithm === 'dfs') {
        algorithmName = 'DFS'
    } else {
        window.location.href = '/'
    }

    document.title = `${algorithmName} | Path Finding Algorithms`

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
    const boxes = document.getElementsByClassName('box')
    const start = document.getElementsByClassName('selectedStart')[0]
    const end = document.getElementsByClassName('selectedEnd')[0]
    if (algorithm === 'binary') {

    } else if (algorithm === 'exponential') {

    } else if (algorithm === 'interpolation') {

    } else if (algorithm === 'jump') {

    } else if (algorithm === 'linear') {

    } else if (algorithm === 'ternary') {

    }
}
