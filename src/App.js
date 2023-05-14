import './App.css';
import { useState } from 'react';
import {moviesData} from './components/Data';
import MovieList from './components/MovieList';
import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AddNewMovie from './components/AddNewMovie';


function App() {
  const [list, setList] =useState(moviesData)
  const [rating, setrating] = useState(1)
  const [text, settext] = useState("")


  return (
    <div>
    <div className='main'>
    <MovieList data={list.filter(el=>el.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())&&el.rating>=rating)}/>
    </div>
    <AddNewMovie/>
    </div>


    
     
    
    
  
);
  }
export default App;













