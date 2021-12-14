import './Home.css'
import NavBar from '../NavBar/NavBar'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const hash = window.location.hash.replace('#', '')
    let sortingHash = false
    let searchingHash = false

    if (hash === 'sorting') {
        sortingHash = true
        searchingHash = false
    } else if (hash === 'searching') {
        searchingHash = true
        sortingHash = false
    } else {
        searchingHash = false
        sortingHash = false
    }

    return (
        <div>
            <NavBar />
            <div style={{ display: sortingHash ? 'none' : 'block' }}>
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
            <div style={{ display: searchingHash ? 'none' : 'block' }}>
                <h1 id='searching' className='centerTitle navBottom' >Searching Algorithms</h1>
                <div className='centerDiv' >
                    <button className='algoButtons' onClick={() => navigate('/search/binary')}>Binary Search</button>
                    <button className='algoButtons' onClick={() => navigate('/search/exponential')}>Exponential Search</button>
                    <button className='algoButtons' onClick={() => navigate('/search/interpolation')}>Interpolation Search</button>
                    <button className='algoButtons' onClick={() => navigate('/search/jump')}>Jump Search</button>
                    <button className='algoButtons' onClick={() => navigate('/search/linear')}>Linear Search</button>
                    <button className='algoButtons' onClick={() => navigate('/search/ternary')}>Ternary Search</button>
                </div>
            </div>
        </div>
    )
}

export default Home