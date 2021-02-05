import React from 'react'

const Navigation=({onchangeScreen,isSignedIn})=>{
 
    {
         if(isSignedIn()){
             return(
            <nav style={{display:'flex', justifyContent:'end'}}>
        <p onClick={()=>{onchangeScreen('signup')}} className="pa3 pointer black f3 underline dim">Sign Out</p>
        
    </nav>)
         }
         else{
             return(
            <nav style={{display:'flex', justifyContent:'end'}}>
            <p onClick={()=>{onchangeScreen('register')}} className="pa3 pointer black f3 underline dim">Register</p>
            <p className="pa3 pointer purple f3">/</p>
            <p onClick={()=>{onchangeScreen('signup')}} className="pa3  pointer black f3 underline dim">SignUp</p>
        </nav>)
         }
     }

}

export default Navigation;
