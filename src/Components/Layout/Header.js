import React from 'react';
 import {Link} from 'react-router-dom'
function Header(){
return(
<header style={headerStyle}>
<h1>
Todo List
</h1>
<Link style={linkstyle} to="/">HOME</Link>{''}|{''}
<Link style={linkstyle} to="/About">ABOUT</Link>
</header>)
}
const headerStyle={
background:'#333',
color:'#fff',
textAlign:'center',
padding: '10px',
}
const linkstyle={
color:'white',
textDecoration:'none',
fontweight:'bold'
}
 export default Header;