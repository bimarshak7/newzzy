import React, { Component, Fragment } from 'react'
import './app.css'

import { Provider } from "react-redux";
import store from './store';

import NewsNP from './components/news';

const App = () => {
	return (
		<Provider store={store}>
			<div className='container'>
			<NewsNP/>
			</div>

		</Provider>
	)
}

export default App;