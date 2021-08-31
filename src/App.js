import React from 'react';
import Apple from './Apple';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src = {picture} alt = {name}/>
      <h3>{rating}/5</h3>
    </div>
  )
}
Food.protoTypes ={
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
}

const foodILike = [
  {
    id : 1,
    name : "초밥",
    image:
    "https://cdn.pixabay.com/photo/2016/04/26/03/55/salmon-1353598_1280.jpg",
    rating : 4.7
  },
  {
    id: 2,
    name : "고기",
    image :
    "https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg",
    rating : 4.5
  },
  {
    id: 3,
    name : "젤리",
    image :
    "https://cdn.pixabay.com/photo/2018/06/19/23/25/sugar-3485430_1280.jpg",
    rating : 5
  }
]

function App() {
  return(
    <div>
    <h1>안녕?</h1>
    <Apple />
    {foodILike.map(dish => (
    <Food 
    key={dish.id} 
    name = {dish.name} 
    picture ={dish.image}
    rating ={dish.rating} />)
      )}
    </div>
    ); 
}

export default App;
