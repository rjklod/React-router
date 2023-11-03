import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './MovieList';
import InfoMovie from './InfoMovie';
import {Data}  from './DataMovie';
import NavBar from './NavBar';
import Filter from './Filter';
import { Rating } from 'react-simple-star-rating'
import {Routes,Route} from 'react-router-dom'
function App ()  {

const [info, setinfo] = useState(Data)
  
function Add(newTitle,desc,newRating){
  setinfo([...info,{title:newTitle, description:desc,rating:newRating}])
}
//function cal back
function serch(ret) { 
  console.log(ret)
 setinfo(info.filter((el)=> el.title.toLowerCase().includes(ret.toLowerCase())))

}
const [rating, setRating] = useState(0)

      // Catch Rating value
      const handleRating = (rate) => {
        setRating(rate)
         setinfo(info.filter((el)=>el.rating>=rating))
      }

    return (
        <>
      <Routes>
          <Route path="/" element={ <div className='container text-center mt-3 box-state'>  <Filter search={serch} />
                  <Rating  onClick={handleRating} />
                  <MovieList props={info} /></div>}/>
          <Route path="/infoMovie/:id" element={<InfoMovie props={info}   />}/>
          <Route  path="/add"  element={ <NavBar   Add={Add} />} /> 
       </Routes>
            
         
        
        </>
    );
  
}

export default App;
