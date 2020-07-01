import React from 'react';
import PropTypes from 'prop-types'; 
class TodoItems extends React.Component{
getStyle=()=>{
return{
 background:'#f4f4f4',
padding:'10px',
borderBottom:'1px #ccc dotted',
textDecoration:this.props.Todo.completed ?
'line-through':'none'
}
}
render(){
const {id ,title}= this.props.Todo;
return(
<div style={this.getStyle()}>
<p>
<input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{''}
{title}
<button onClick ={this.props.delTodos.bind(this,id)}style={ButtonStyle}>x</button>
</p>
</div>
)
}}
//proptypes
TodoItems.propTypes={
markComplete:PropTypes.func.isRequired,
delTodos:PropTypes.func.isRequired,
}

const ButtonStyle={
background:'#ff0000',
color:'#fff',
border:'none',
padding:'5px 10px',
borderRadius:'50%',
cursor:'pointer',
float:'right'
}

export default TodoItems;