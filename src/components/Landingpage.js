

import React, { Component } from 'react';
import styled from 'styled-components' ;

import { connect } from "react-redux";

import { setText }  from  "../appActions";
import {setOrderid} from "../appActions" ;

import history from '../history'

import '../index.css';
import {container1style} from "./Landingpagestyles" ;







class Landingpage extends React.Component {
  constructor(props) {
    super(props)
    this.state=
    { 

      data: [],
      selectedline: {} ,
     }

  }



  componentDidMount() {
    
  
}



HandleChange = row => {
  console.log("clicked") ;
  
};

 render() {
        
    return (
       
<div >
<p > {this.props.myText} </p>

</div>



          

            
     




    );
}
 
}


const mapStateToProps = state => ({

  myText: state.myText,
  myOrderid: state.myOrderid,

});



const mapDispatchToProps = {

 

  setText,
  setOrderid,

};



export default connect(

  mapStateToProps,

  mapDispatchToProps

)(Landingpage);