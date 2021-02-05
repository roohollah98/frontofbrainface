
import './App.css';
import Navigation from './components/navigations/Nav'
import Logo from './components/logo/logo'
import Rank from './components/rank/rank';
import LinkForm from './components/input/linkform';
import Face from './components/facerecognizer/face';
import Particles from 'react-particles-js';
import { Component } from 'react';
import SignUp from './components/signup/signup.js'
import Register from './components/register/register.js'
//Url
//https://buffer.com/library/content/images/2020/05/Frame-9.png
//https://th.bing.com/th/id/OIP.GeiUY3eOX65qCmG8vkOPcAHaJm?pid=Api&rs=1
const ParticlesOptipn={
  
  "number":{
    "value":500,
    "density":{
      "value":800,
      enable:true,
      value_area:800
    }
  },  "move": {
    "speed":5
},  "draw": {
  "enable": true,
  "stroke": {
      "color": "rgba(255, 255, 255, .2)"
  }
}

}

const initialstate={
  imageUrl:'',
  inp:'',
  Box:{},
  screen:'signup',
  user:{
    id:'',
    name:'',
    email:'',
    entries:0
  }
}

class App extends Component {
constructor(){
  super();
  this.state=(initialstate);
}
loadUser=(data)=>{
  this.setState(  {user:{
    id:data.id,
    name:data.name,
    email:data.email,
    entries:data.entries
  }})

  console.log(this.state.user);
}

isSignedIn=()=>{
  if(this.state.screen==='home'){
    return true;
  }
  else{
    return false;
  }
}
changeScreen=(form)=>{
 
    this.setState({screen:form})
    if(form=='signup'){
      this.setState(initialstate);
    }

}
  onChangeUrl=(event)=>{
    this.setState({inp:event.target.value});
  
 }
 sendUrl=()=>{
   this.setState({imageUrl:this.state.inp})
   fetch('https://ancient-peak-65167.herokuapp.com/imageUrl',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({input:this.state.inp})
  }).then(res=>res.json())
   .then(res=>{
    console.log('hi', res)
    //https://buffer.com/library/content/images/2020/05/Frame-9.png
     if(res){
       console.log(res);
       fetch("https://ancient-peak-65167.herokuapp.com/image",{
         method:'PUT',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify({id:this.state.user.id})
       })
       .then(response=>response.json())
       .then(count=>{
         console.log("count",count);
        this.setState(Object.assign(this.state.user, { entries: count}))
       })
     }
    this.displayBox(this.calculateBox(res));


   }).then(err=>{})


 }
 displayBox=(Box)=>{
  this.setState({Box:Box});
 }
calculateBox=(data)=>{
  const FaceBox= data.outputs[0].data.regions[0].region_info.bounding_box;
  const image=document.getElementById('inputImage');
  const width=Number(image.width);
  const height=Number(image.height);
return{  
  leftCol:FaceBox.left_col*width,
  topRow:FaceBox.top_row*height,
  rightCol:width-(FaceBox.right_col*width),
  bottomRow:height-(FaceBox.bottom_row*height)



}



  
}
  render(){
  return (
    <div className="App">
      <Navigation onchangeScreen={this.changeScreen} isSignedIn={this.isSignedIn} />
     
      {
          this.state.screen ==='signup'? <SignUp loadUser={this.loadUser} onchangeScreen={this.changeScreen}/>:(
          this.state.screen ==='register'? <Register loadUser={this.loadUser} onchangeScreen={this.changeScreen}/>:
          <div>
        <Logo/>
        <Rank name={this.state.user.name} enteries={this.state.user.entries} />
      <LinkForm onChangeUrl={this.onChangeUrl} onSend={this.sendUrl}/>
      <Face Url={this.state.imageUrl} Box={this.state.Box}/>
      </div>
          )
      }
      <Particles className="particle-canvas" 
                params={ParticlesOptipn}
              
              />

    </div>
  );
  }
}

export default App;
