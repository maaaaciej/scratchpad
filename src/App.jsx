import React from "react"

import SubmitForm from "./components/submit.component"
import Header from "./components/header.component"
import TodoList from "./components/todolist.component"


import "./App.css"


class App extends React.Component {
  state = {
    tasks: []
  };
  
  
  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task]});
  }
  
  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
  }

  render() {
    return(
      <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  } 
}

export default App