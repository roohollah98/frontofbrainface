import React from  'react'
import './face.css'
import '../../App.css'
const Face=({Url,Box})=>{
    return(
        <div className="centr mt2">
        <div className="absolute">
        {Url!==""?(<img alt="Input" id='inputImage'  style={{width:'400px',height:'auto'}} src={Url}></img>):console.log("")
        }
        <div className="facebox" style={{top:Box.topRow,bottom:Box.bottomRow,left:Box.leftCol,right:Box.rightCol}}>

        </div>
        </div>
     
        </div>
    )
}

export default Face;