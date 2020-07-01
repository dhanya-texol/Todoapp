import React from 'react';
import PropTypes from 'prop-types'; 
class AddTodos extends React.Component{
state={
title:'',
}
onChange= (e) =>{
this.setState(
{[e.target.name]:e.target.value}
)
}
onSubmit =(e)=>{
e.preventDefault();
this.props.Addtodo( this.state.title
);
this.setState({title:''});
}
render(){
return(
<form onSubmit={this.onSubmit} style={{display:'flex'}}>
<input type="text" placeholder="Enter Todo ..."  name="title" value={this.state.title}  onChange={this.onChange} style={{flex:'10',padding:'5px' }}/>
<input type="submit" value="submit" className="btn" style={{flex:'1'}}/>
</form>
)}
}
AddTodos.propTypes={
Addtodo:PropTypes.func.isRequired,
}
export default AddTodos;