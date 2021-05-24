import background from "./Rectangle6.png";

const text1style={
  

  /* Smart Pay by Allsec Technologies */

position: 'absolute',
width: '532px',
height: '128px',
left: '0px',
top: '100px',
paddingLeft: '40px',

fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: '600',
fontSize: '52px',
lineHeight: '64px',
/* or 123% */


/* White */
color: '#ffffff',



}


const text2style={
  
position: 'static',
width: '400px',
height: '54px',
left: '0px',
top: '0px',
fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: '600',
fontSize: '30px',
lineHeight: '54px',
/* identical to box height, or 129% */

display: 'flex',
alignItems: 'center',


color: '#25282B',


/* Inside Auto Layout */

flex: 'none',
order: '0',
flexGrow: '0',
margin: '10px 0px',

}


const rectstyle= {
 
display: 'inline-block',
width: '100px',
height: '100px',
background: 'red',
}
const buttonstyle={
  
color: '#0000FF',

}
const container1style= {
            backgroundImage: `url(${background})`, 
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '20%',
}

const container2style=
{
      display: 'flex', 
      flexDirection: 'column',
      width: '50%',
      height: '50%',
      
      }

const formstyle=
{
      display: 'flex', 
      flexDirection: 'column',
      width: '30%',
      paddingTop: '40px' ,
      paddingLeft: '30px',
      alignItems: 'center',
      
      }


export {formstyle,text1style,text2style,container2style, container1style} ;