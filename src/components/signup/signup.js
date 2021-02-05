import React from 'react'
class SignUp extends React.Component{ 
  constructor(props){
    super(props);
    this.state={
      signupEmail:'',
      signupPass:''
    }
  }
onSignUpEmailChange=(event)=>{
this.setState({signupEmail:event.target.value})

}

onSignUpPassChange=(event)=>{
  this.setState({signupPass:event.target.value})
  }
 
 onSignUpSubmit=()=>{
 console.log(this.state.signupEmail);
 console.log(this.state.signupPass);
    fetch('https://ancient-peak-65167.herokuapp.com/signup',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({email:this.state.signupEmail,
        password:this.state.signupPass
      })

    })
    .then(res=>res.json())
    .then(user=>{

     if(user.id){
  this.props.loadUser(user);     
  this.props.onchangeScreen('home');
     }
     
    })
      
  
   
  }
  
 

  render(){
    const {onchangeScreen}=this.props;
    return(
      <article className="mw6 shadow-5 center w-100 w-50-m w-25-l  br3 pa3 pa4-ns mv4 ba b--black-10">
<main className="pa4 black-80 ">
<div className="measure">
  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    <legend className="center f1 fw6 ph0 mh0">Sign In</legend>
    <div className="mt3">
      <label
      
       className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
      <input  onChange={this.onSignUpEmailChange}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
    </div>
    <div className="mv3">
      <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
      <input onChange={this.onSignUpPassChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
    </div>

  </fieldset>
  <div style={{margin:'0 auto'}}>
  <div style={{margin:'0 auto'}}>
    <input onClick={this.onSignUpSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
  </div>
  <div  className=" lh-copy mt3">
    <p onClick={()=>onchangeScreen('register')} className="pointer f6 link dim black db pointer">Register</p>

  </div>
  </div>
 
</div>
</main>
</article>
  )
  }
    
}


export default SignUp;