import React from 'react';
import Apple from './Apple';

function Food({favourite}) {
  return <h2>I love {favourite}</h2>
}
function App() {
  return(
    <div>
    <h1>안녕?</h1>
    <Apple />
    <Food favourite = "초밥" />
    <Food favourite = "고기" />
    <Food favourite = "젤리" />
    </div>
    ); 
}

export default App;
