import { React,useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchMovies,getAnime,horror,comedy  } from './config'
import './main.css';
export default function Main() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [nowanime, setnowanime] = useState([]);
  const [nowhorror, setnowhorror] = useState([]);
  const [nowcomedy, setnowcomedy] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setnowanime(await getAnime());
      setnowhorror(await horror());
      setnowcomedy(await comedy());
      
    };

    fetchAPI();
  }, []);


 

  const movies = nowPlaying.slice(0, 5).map((item, index) => {
   
    
    return (
      <div className='itemm' key={index}>

         <Link to={`/item/${item.id}`}>
          <div className='item' >
       <img src={item.poster} className='item-image' />
       <div className="item-text">
         <div className="item-rating">
       <i className="fa-solid fa-star"></i> <p>{item.rating}</p></div>
       <p className='item-title'>{item.title.slice(0,20)}..</p></div>
       </div>
       </Link>
       
      </div>
    );
  });
  
  const animelist = nowanime.slice(3, 8).map((item, index) => {
    if(item.title){
      return (
        <div className='itemm' key={index}>

         <Link to={`/item/${item.id}`}>
          <div className='item' >
       <img src={item.poster} className='item-image' />
       <div className="item-text">
         <div className="item-rating">
       <i className="fa-solid fa-star"></i> <p>{item.rating}</p></div>
       <p className='item-title'>{item.title.slice(0,20)}..</p></div>
       </div>
       </Link>
       
      </div>
      );}
  });

  const horrorlist = nowhorror.slice(0, 5).map((item, index) => {
   
    
    return (
      <div className='itemm' key={index}>

         <Link to={`/item/${item.id}`}>
          <div className='item' >
       <img src={item.poster} className='item-image' />
       <div className="item-text">
         <div className="item-rating">
       <i className="fa-solid fa-star"></i> <p>{item.rating}</p></div>
       <p className='item-title'>{item.title.slice(0,20)}..</p></div>
       </div>
       </Link>
       
      </div>
    );
  });

  const comedylist = nowcomedy.slice(0, 5).map((item, index) => {
   
    
    return (
      <div className='itemm' key={index}>

         <Link to={`/item/${item.id}`}>
          <div className='item' >
       <img src={item.poster} className='item-image' />
       <div className="item-text">
         <div className="item-rating">
       <i className="fa-solid fa-star"></i> <p>{item.rating}</p></div>
       <p className='item-title'>{item.title.slice(0,20)}..</p></div>
       </div>
       </Link>
       
      </div>
    );
  });
  return (
    <div className='mainnn'>
       
<div className="title-main">


  <p className='title-p'>Trending</p>
 <div className="datat">
  
      {movies} </div>  
      </div>






      <div className="title-main">


<p className='title-p'>Animation</p>
<div className="datat">

    {animelist} </div>  
    </div>


    <div className="title-main">


<p className='title-p'>Horror</p>
<div className="datat">

    {horrorlist} </div>  
    </div> 

    <div className="title-main">


<p className='title-p'>Comedy</p>
<div className="datat">

    {comedylist} </div>  
    </div> 

  </div>

  



  )
}


