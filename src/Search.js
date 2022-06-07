import { React,useEffect,useState} from 'react'
import { searchMovies } from './config';
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Notfound from './notfound.jpg'
import './search.css';
export default function Search() {


const { mim } = useParams();
   const [detail, setdetail] = useState([]);

   useEffect(() => {

    const fetchAPI = async () => {
      if(mim){
      setdetail(await searchMovies(mim));
    console.log(detail)}
    };

    fetchAPI();
  }, [mim]);

 
 const elmenti = '';

  return (
    <div>

      
        <div className="tat">
  
 
      
      {detail?detail.map((item, index) => {

        if(item.title){
    return (
      <div className='itemm' key={index}>
       <Link to={`/item/${item.id}`}>
          <div className='item' >
       <img src={item.poster} className='item-image' alt="image not found" onError={Notfound}/>
       <div className="item-text">
         <div className="item-rating">
       <i className="fa-solid fa-star"></i> <p>{item.rating}</p></div>
       <p className='item-title'>{item.title.slice(0,20)}..</p></div>
       </div>
       </Link>
      </div>
    )}
  }):<h1>not found</h1>}

 
        </div>
        
    </div>
  )
}
