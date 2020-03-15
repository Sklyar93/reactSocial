import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"

const App = () => {
  return (
    <div className='app-wrapper'>
    	<Header />
    	<Navbar />
    	<Content />
    </div>);
}

export default App;