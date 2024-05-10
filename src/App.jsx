import React, { createContext, useState } from 'react'
import {
	BrowserRouter, Routes, Route
} from "react-router-dom"

import Home from './pages/Home'
import DetailResto from './pages/DetailResto'

export const RestoDetailContext = createContext({ resto: {}, setResto: () => { } })

const App = () => {
	const [restoDetail, setRestoDetail] = useState({})
	return (
		<BrowserRouter>
			<RestoDetailContext.Provider value={{ resto: restoDetail, setResto: (resto => setRestoDetail({ ...resto })) }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/detail-resto' element={<DetailResto />} />
				</Routes>
			</RestoDetailContext.Provider>
		</BrowserRouter>
	)
}

export default App