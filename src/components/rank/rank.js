import React from 'react'
const Rank=({enteries,name})=>{
    return(
     
        <div style={{margin:'0 auto',width:'50%'}}>
        <div style={{display:'flex',justifyContent:'center'}} className="f3 white">{`${name}, your current entry count is...`}</div>
        <div style={{display:'flex',justifyContent:'center'}} className="f2 white">{enteries}</div>
        </div>
      

       
    )
}

export default Rank;