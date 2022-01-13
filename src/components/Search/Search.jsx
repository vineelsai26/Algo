import { useParams } from 'react-router-dom'
import { useWindowDimensions } from './WindowDimensions'
import { dijkstra } from './Algorithms/Dijkstra'
import { astar } from './Algorithms/Astar'
import { bfs } from './Algorithms/BFS'
import { dfs } from './Algorithms/DFS'
import NavBar from '../NavBar/NavBar'
import './Search.css'

export default function Search() {
    let { algorithm } = useParams()
    let algorithmName = algorithm

    if (algorithm === 'dijkstra') {
        algorithmName = `Dijkstra's Algorithm`
    } else if (algorithm === 'a*') {
        algorithmName = 'A* Search'
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

    let width1 = parseInt(width / 60)
    let height1 = parseInt(height / 30)

    for (let i = 0; i < 25; i++) {
        for (let j = 0; j < 60; j++) {
            grid.push(
                <button id={i + '-' + j} key={i + '-' + j} row={i} col={j} style={{
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
            <div>
                <div style={{ height: height, width: width1 * 60, margin: 'auto' }}>
                    {grid}
                </div>
                <div className='start'>
                    <button className='startButton' onClick={() => { search(algorithm) }}>Start</button>
                </div>
            </div>
        </div>
    )
}

function search(algorithm) {
    const start = document.getElementsByClassName('selectedStart')[0]
    const end = document.getElementsByClassName('selectedEnd')[0]
    const grid = document.getElementsByClassName('box')
    if (algorithm === 'dijkstra') {
        dijkstra(grid, start, end)
    } else if (algorithm === 'a*') {
        astar(grid, start, end)
    } else if (algorithm === 'bfs') {
        bfs(grid, start, end)
    } else if (algorithm === 'dfs') {
        dfs(grid, start, end)
    }
}
