import './App.css';
import{React,useState,useEffect} from 'react'
import {Routes,Route,useNavigate,Link} from 'react-router-dom'
import Main from './Main';
import Search from './Search';
import Test from './Test';
import Item from './Item';

function App() {
let navigate = useNavigate();
const [keyword, setkeyword] = useState('');
const [endpoint, setendpoint] = useState('');

useEffect(() => {
  if(endpoint){
 navigate(`/search/${endpoint}`);}
}, [endpoint])

const submitHandle = (e)=>{
e.preventDefault();
setendpoint(keyword);

}



  return (
    <div className="App">

<div className="navbar">

<div className="logo">

<Link to='/'><h1>MDB</h1></Link>
</div>


<div className="nav-links">
<ul>
<Link to='/'> <li>Home</li></Link>
<Link to='/search/avengers'> <li>Search</li></Link>
 <a href=""> <li> Code</li></a>
</ul>
</div>
  
      <div className="search">
  <form onSubmit={submitHandle}>
    <input type="search" value={keyword} placeholder='search any movie' onChange={(e)=>{setkeyword(e.target.value)}} />
    <button className='search-button'><i className="fa-solid fa-magnifying-glass"></i></button>
  </form>
  </div>


  </div>


  





      <Routes>
      <Route path='/' element={<Main />} exact/>
      <Route path='/search/:mim' element={<Search />} exact />
      <Route path='/item/:idi' element={<Item />} exact />
      <Route path='/test' element={<Test />} exact />
      
      </Routes>
    

   
    </div>
  );
}

export default App;
