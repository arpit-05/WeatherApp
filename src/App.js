import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./component/Title"       
import Title from './component/Title';
import Form from './component/Form';
import Weather from './component/Weather';

const API_KEY='3369a82b73c144c41e36a6c25071a066';

class App extends React.Component {
  
  
  state={
    temperatue:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
}

  getWeather=async (e) =>{
    e.preventDefault();
    const city=e.target.val
    const country=e.target.val
    const API_CALL=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data=await API_CALL.json();
    console.log(data);
    if(city&&country){
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:""
    })
  }
  else{
    this.setState({
      temperatue:undefined,
      city:undefined,
      country:undefined,
      humidity:undefined,
      description:undefined,
      error:"Please enter the value"
    })
  }

  }
  render() {
    
    return (
      <div>
           <div className="wrapper">
             <div className="main">
               <div className="container">
                 <div className="row"></div>
                 <div className="col-xs-5 title-container">
                 <Title/>
                 </div>
                 <div className="col-xs-7 form-container">
                 
               <Form getWeather={this.getWeather}/>
               <Weather temperature={this.state.temperature}
                    city={this.state.city}   
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error} />

               </div>
               </div>
               
             </div>
           </div>
           

      </div>
    );
  }
}

           
export default App;
