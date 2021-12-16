import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Sort from './components/Sort/Sort'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/sort/:algorithm' element={<Sort />} />
				<Route exact path='/search/:algorithm' element={<Search />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
