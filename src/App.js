
import React from 'react';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodos';
import Header from './Components/Layout/Header';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import About from './Components/Pages/About'
import axios from 'axios';
import Apps from './Apps'
class App extends React.Component{
state={
Todos:[]
}
componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
.then(res=>
this.setState({Todos:res.data}))
}
//Toggle complete
markComplete = (id) => {
this.setState({
Todos:this.state.Todos.map(todos =>{
if(todos.id === id)
{
todos.completed=!todos.completed
}
return todos})
})
}
//Delete Todos
delTodos=(id)=>{
axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
.then(res=>this.setState({
Todos:[...this.state.Todos.filter(todos =>todos.id!== id)]
}))

}
//add todo
Addtodo =(title)=>{
axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false})
.then(res=>this.setState({
Todos:[...this.state.Todos,res.data]
}))

}
render(){
return(
<Router>
<div className="Container">
<Header/>
<Route exact path="/" render={props=>(
<React.Fragment>
<AddTodo Addtodo={this.Addtodo}/>
<Todo Todos={this.state.Todos} markComplete={this.markComplete} delTodos={this.delTodos}/>
<Apps/>
</React.Fragment>
)}
/>
<Route path="/About" component={About}/>
</div>
</Router>
)}}
export default App;