import React from 'react'

function Random({min, max}) {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
  return (
    <div class="random">
        <p>Random value between {min} and {max}: {randomNumber}</p>
    </div>
  )
}

export default Random