import React from 'react';
 
import { Link } from 'react-router-dom';
 
const Navigation = () => {



const ulStyle = {border: '2px solid green', width:'20%', listStyleType:'none'}
    const liStyle = {color : 'blue', fontSize:'23px'}

    return (
       <div style={{ulStyle}} >
          <Link style={{padding: 20,color: 'white',  width:'20%', listStyleType:'none'}} to="/" >Home</Link>
          <Link style={{padding: 20,color: 'white',  width:'20%', listStyleType:'none'}} to="/Landingpage">Landingpage</Link>
      </div>
    );
}
 
export default Navigation;