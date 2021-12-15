import './Home.css'
import NavBar from '../NavBar/NavBar'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const hash = window.location.hash.replace('#', '')
    let sortingHash = false
    let findingHash = false

    if (hash === 'sorting') {
        sortingHash = true
        findingHash = false
    } else if (hash === 'finding') {
        findingHash = true
        sortingHash = false
    } else {
        findingHash = true
        sortingHash = true
    }

    return (
        <div>
            <NavBar />
            <div style={{ display: sortingHash ? 'block' : 'none' }}>
                <h1 id='sorting' className='centerTitle navBottom' >Sorting Algorithms</h1>
                <div className='centerDiv' >
                    <button className='algoButtons' onClick={() => navigate('/sort/bubble')}>Bubble Sort</button>
                    <button className='algoButtons' onClick={() => navigate('/sort/selection')}>Selection Sort</button>
                    <button className='algoButtons' onClick={() => navigate('/sort/merge')}>Merge Sort</button>
                    <button className='algoButtons' onClick={() => navigate('/sort/insertion')}>Insertion Sort</button>
                    <button className='algoButtons' onClick={() => navigate('/sort/quick')}>Quick Sort</button>
                    <button className='algoButtons' onClick={() => navigate('/sort/heap')}>Heap Sort</button>
                </div>
            </div>
            <div style={{ display: findingHash ? 'block' : 'none' }}>
                <h1 id='finding' className='centerTitle navBottom' >Path Finding Algorithms</h1>
                <div className='centerDiv' >
                    <button className='algoButtons' onClick={() => navigate('/search/dijkstra')}>Dijkstra's Algorithm</button>
                    <button className='algoButtons' onClick={() => navigate('/search/a*')}>A* Search</button>
                    <button className='algoButtons' onClick={() => navigate('/search/greedy')}>Greedy BFS</button>
                    <button className='algoButtons' onClick={() => navigate('/search/swarm')}>Swarm Algorithm</button>
                    <button className='algoButtons' onClick={() => navigate('/search/convergent')}>Convergent Swarm Algorithm</button>
                    <button className='algoButtons' onClick={() => navigate('/search/bidirectional')}>Bidirectional Swarm Algorithm</button>
                    <button className='algoButtons' onClick={() => navigate('/search/bfs')}>BFS</button>
                    <button className='algoButtons' onClick={() => navigate('/search/dfs')}>DFS</button>
                </div>
            </div>
        </div>
    )
}

export default Home