import React from 'react'
class Register extends React.Component{
  constructor(props){
super(props);
this.state={name:'',email:'',password:''}
  }

  onEmailChange=(event)=>{
     this.setState({email:event.target.value})
  }
  onNameChange=(event)=>{
    this.setState({name:event.target.value})
  }
  onPasswordChange=(event)=>{
    this.setState({password:event.target.value})
  }
  onSubmit=()=>{
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.password);
   fetch('https://ancient-peak-65167.herokuapp.com/register',{
     method:'post',
     headers: {'Content-Type': 'application/json'},
     body:JSON.stringify(
    {
         "email":this.state.email,
         "name":this.state.name,
         "password":this.state.password 
    
    })
  
   })
   .then(res=>res.json())
   .then(user=>{
    console.log(user);
     if(user.id){
      this.props.loadUser(user);
      this.props.onchangeScreen('home');
     }

   
   })

    // 
  }
  render(){
    return(
      <article className="mw6 shadow-5 center w-100 w-50-m w-25-l  br3 pa3 pa4-ns mv4 ba b--black-10">
      <main className="pa4 black-80 ">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="center f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name-address">name</label>
              <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="name-address"  id="name-address"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
      
          </fieldset>
          <div className="">
            <input onClick={this.onSubmit}  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
          </div>
          
        </div>
      </main>
      </article>

    
    
  )
  }
   
}
export default Register;