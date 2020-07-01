import React from 'react';
import TodoItems from './TodoItems'
import PropTypes from 'prop-types'; 
class Todo extends React.Component{
render(){
return this.props.Todos.map((Todo)=>(
<TodoItems  key={Todo.id} Todo={Todo} markComplete={this.props.markComplete} delTodos={this.props.delTodos}/>
));}}
Todo.propTypes={
Todos:PropTypes.array.isRequired,
markComplete:PropTypes.func.isRequired,
delTodos:PropTypes.func.isRequired,
}
export default Todo;