import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}) {
    Number(height);
  return (
    <div className='id-card'>
        <div>
            <img src={picture}/>
        </div>
        <div className='info'>
            <p><b>First Name:</b> {firstName}</p>
            <p><b>Last Name:</b> {lastName}</p>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Height:</b> {height}</p>
            <p><b>Birth:</b> {birth.toString().slice(0, 15)}</p>
        </div>
    </div>
  )
}

export default IdCard