import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import Sort from './components/Sort/Sort'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/sort/:algorithm" element={<Sort />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
