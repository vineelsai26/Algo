import './Home.css'
import NavBar from '../NavBar/NavBar'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <NavBar />
            <div>
                <h1 id='sorting' className='centerTitle navBottom'>Sorting Algorithms</h1>
                <div className='centerDiv'>
                    <button className='algoButtons' onClick={() => navigate('/sort/bubble')}>Bubble Sort</button>
                    <button className='algoButtons' onClick={() => navigate('/sort/selection')}>Selection Sort</button>
                    <button className='algoButtons' onClick={() => navigate('/sort/merge')}>Merge Sort</button>
                    <button className='algoButtons' onClick={() => navigate('/sort/insertion')}>Insertion Sort</button>
                    <button className='algoButtons' onClick={() => navigate('/sort/quick')}>Quick Sort</button>
                    <button className='algoButtons' onClick={() => navigate('/sort/heap')}>Heap Sort</button>
                </div>
                <h1 id='searching' className='centerTitle'>Searching Algorithms</h1>
                <div>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default Home