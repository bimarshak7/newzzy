import React from 'react'
import { useDispatch, useSelector  } from "react-redux";
import { langChange } from "../actions/news";

const Nav=()=>{
	const lang=useSelector(state => state.news.lang);
	const isLoading=useSelector(state => state.news.isLoading);
	const dispatch=useDispatch()
	return(
		<nav className="navbar fixed-top navbar-dark bg-dark">
  			<a className="navbar-brand" href="#">Newzzy :):</a>
			<ul className="nav justify-content-end">
			  <li className="nav-item" onClick={() => dispatch(langChange({lang}))}>
			    <a className={isLoading?"nav-link disabled":'nav-link'} href="#" >{lang ? 'Nep': 'Eng'}</a>
			  </li>
			</ul>
		</nav>
		)
}


export default Nav;