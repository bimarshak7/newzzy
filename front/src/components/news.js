import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector  } from "react-redux";
import PropTypes from 'prop-types';
import { getEn,getNp, langChange} from "../actions/news";

import Loading from './loading';
import Nav from './nav';


const NewsEn=()=>{
	
	const news = useSelector(state => state.news.news);
	const isLoading=useSelector(state => state.news.isLoading);
  const lang=useSelector(state => state.news.lang);
  const dispatch = useDispatch();

	useEffect(() => {
    if(lang){
	    dispatch(getEn()); 
    }
    else{
        dispatch(getNp());
    }
	  },[lang,isLoading,news,Loading]);
  
	
	const newsItems = Object.keys(news).map(key =>(
		<div key={news[key].id} className="card mb-3">
  			<div className="row no-gutters">
    			<div className="col-md-4">
      				<img src={news[key].img} className="card-img" alt="..."/>
    			</div>
    		<div className="col-md-8">
      			<div className="card-body">
              <a href={news[key].url} target="_blank">
        			 <h4 className="card-title">{news[key].title}</h4></a>
        			<p className="card-text">{news[key].snip}</p>
      			</div>
    		</div>
  		</div>
  		</div>
        ));

    return(<div>
        <Nav/>
        {isLoading ? Loading(): newsItems}
        </div>
        )
}


export default NewsEn;