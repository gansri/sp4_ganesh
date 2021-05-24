import React, { useState ,Component} from 'react';
import './login.css';
import PropTypes from 'prop-types';
import background from "./Rectangle6.png";

import vector1 from "./Vector1.png";
import vector2 from "./Vector2.png";
import logo from "./Allsec-Logo.png";
import history from "../../history" ;
import { connect } from "react-redux";
import { setText } from "../../appActions";
import {text1style,text2style,container1style,container2style,formstyle} from "./loginpagestyles" ;




class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange   = this.handlePassChange.bind(this);
    this.handleUserChange   = this.handleUserChange.bind(this);
    this.handleSubmit       = this.handleSubmit.bind(this);
    
    

  }




 handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
this.props.setText(evt.target.value);
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }
  

  handleSubmit = async (e) => {
    //e.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password) ;

  fetch("http://localhost:8000/users?userid="+this.state.username+"&password="+this.state.password,{
  mode: 'cors',
  method: 'GET' ,
  headers: {
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
  }


})
    .then((res) => res.json()) 
    .then((data) => {
      console.log(data);
    });


    //console.log(token);
    //setToken(token);
    console.log("Login Successfully");
    this.props.history.push("./Landingpage") ;
  }

  render() {


  return (
    
    <div>
    <div style=
        {container1style}> 
    <div 
      style={container2style}>


    <img style={{height: '20%'}} src={vector1} />
    
    <img style={{height: '20%'}} src={vector2} />
    </div>
      
    <div 
      style={formstyle}>
      <form onSubmit={this.handleSubmit}>
      
      <div style={text2style}> 

        <p>Welcome to Smart Pay </p>

      </div>
      <label>
        <p>Username</p>
        <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
      </label>
      <div style={{paddingTop: 10,}}>
        <button style={{color: '#FFFFFF',backgroundColor: '#0000FF'}} type="submit">Submit</button>
      </div>
      
      </form>
    </div>
   
   
    
    
    </div>
    <div style={text1style}> 

      <p>Smart Pay by Allsec Technologies</p>
      <div >
        <img src={logo} />
      </div>
    </div>
    
    </div>
  );
  }
}
const mapStateToProps = state => ({

  myText: state.myText

});



const mapDispatchToProps = {

 

  setText

};



export default connect(

  mapStateToProps,

  mapDispatchToProps

)(Login);