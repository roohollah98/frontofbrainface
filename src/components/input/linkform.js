import React from 'react'
import '../../App.css'
const LinkForm=({onChangeUrl,onSend})=>{
    return(
        <div style={{margin:'0 auto' ,width:'50%' }}>
            <p className="centr f3 ">
    {'This Magic Brain Will detect faces in your pictures.Get it a try'}
</p>

<div style={{margin:'0 auto'}} className="br3 shadow-2 form">

<div className="centr pa4">
<input className="f3 w-70 pa1" onChange={onChangeUrl} ></input>
<button className="f3 white dib bg-light-purple pv2 ph3 grow w-30 pointer" onClick={onSend}>Detect</button>
</div>

</div>
        </div>


    )
}

export default LinkForm;