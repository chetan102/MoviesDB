import React from 'react'
import { useState,useEffect } from 'react'
import { getAnime } from './config'
import { Link } from 'react-router-dom'
import './test.css'
export default function Test() {
    const [testdt, settestdt] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
          settestdt(await getAnime());
         console.log(testdt);
        };
    
        fetchAPI();
      }, []);
    
      const movies = testdt.slice(0, 1).map((item, index) => {
        return (
          <div className='cards' key={index}>

         <Link to={`/item/${item.id}`}>

          <div className='card' >
       <img src={item.poster} className='card-image' />

       <div className="card-text">
         <div className="card-rating">
       <i className="fa-solid fa-star"></i> <p>{item.rating}</p></div>
       <p className='card-title'>{item.title.slice(0,20)}..</p></div>
       </div>
       </Link>
       
      </div>
        );
      });
      
  return (
    <div>
        <div className="datat">
          
            {movies}
        </div>
    </div>
  )
}

