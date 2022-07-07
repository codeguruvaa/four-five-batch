import React from 'react';
import Header from './Components/Header';
import Slider from './Components/Slider';

var pdesign ={
  width:'950px',
  backgroundColor:'gray',
  padding:'10px'
}

function App() {
  return (
    <div>

      <Header />
      <Slider />

      <h2 style={{color:'orange', backgroundColor:'cyan'}}>Heading</h2>

      <p style={pdesign}>
        the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
        the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
        the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
        the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
        the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
        the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
        the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
        the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
      </p>


      
    </div>
  );
}

export default App;