import React from 'react'
import { useState,useEffect } from 'react';
import { fetchMovieDetail } from './config';

import { useParams } from 'react-router-dom';
import './item.css';
import Notfound from './notfound.jpg'

export default function Item() {
  
  const { idi } = useParams();

  const [ruby, setruby] = useState([]);

  useEffect(() => {
    
    const fetchAPI = async () => {
      setruby(await fetchMovieDetail(idi));
     console.log(ruby);

     
    };

    fetchAPI();
    
  }, [idi])
  
  
  
  return (
    <div className='itemss'>
      <div className="items" >
        <div className="items-image">
          <img src={`https://image.tmdb.org/t/p/original/${ruby.poster_path}`}  alt='image not found'/>
        </div>

        <div className="items-text">
        <h1>{ruby.original_title}</h1>
       
        <h6 className='no6'>{ruby.tagline}</h6>
        
<h6 className='no5'>{ruby.overview}</h6>

<div className="genres">
{ruby.genres&&ruby.genres.map(item =>{
      return(
        <div className="geners-item" key={item.id}>
          <h6>{item.name}</h6>
        </div>
      )
    })}</div>
<br />

<div className="no32">

<div className='no3'>
          <h6>Original Release:</h6>
         
          <h6 className='no33'>{ruby.release_date}</h6>
        </div>
        <div className="second">




<div className="ratingg">
         <h6>Rating:</h6>
         <div className="ratingg-div">
         <i className="fa-solid fa-star"></i> 
         <h6 className='ratingg-color'>{ruby.vote_average} / 10</h6>
         </div>
         </div> 


</div>
       
     
        </div>



       

        </div>
        
        
        
 
      </div>

      
    </div>
  )
}

