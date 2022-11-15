import React from 'react'

function BoxColor({r, g, b}) {
    Number(r)
    Number(g)
    Number(b)
    let divStyle = {
        backgroundColor: "rgb("+r+","+g+","+b+")"
    }  


  return (
    <div style={divStyle} className="color-box">
        <p>rgb({r},{g},{b})</p>
        <p className='test'></p>
    </div>
  )
}

export default BoxColor