import React from 'react';
import './App.css';
import Header from './component/Header';
import Trac from './component/Trac';
import Solution from './component/Solution';
import Blog from './component/Blog';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Trac />
      <Solution />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
