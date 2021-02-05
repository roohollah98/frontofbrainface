import React from 'react'
import Tilt from 'react-tilt'
import alien from './logo.png'
import '../../App.css'

const Logo=()=>{
    return(
       
         <Tilt className="Tilt br2 mt0 ma4 shadow-2" options={{ max : 50 }} style={{ height: 120, width: 120 }} >
         <div  className="Tilt-inner back pa2 ">

         <img alt="input"  src={alien} ></img>


         </div>
</Tilt>
     
    )
}

export default Logo;