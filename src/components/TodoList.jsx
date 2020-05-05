import React from 'react';
import './TodoList.css'

export class TodoList extends React.Component {
  state = {
    tasks: [
      { id: 1, name: 'Clean', editable: false },
      { id: 2, name: 'CleanNEr', editable: false }
    ]
  }

  handleEdit = (id) => {
    const task = this.state.tasks.find(task => task.id === id)
    task.editable = false 
    this.setState({ tasks: [...this.state.tasks, task] })
  }

  handleAddTask = () => {
    const {tasks} = this.state
    const taskCount = tasks.length
    tasks.push({id: taskCount + 1, name: '', editable: true})
    this.setState({tasks: tasks})
  }

  render() {
    const { tasks } = this.state

    return (
      <div className="tasks-list">
        {tasks.map(task => (
                  <div key={task.id} className="task">
                  <h1>{task.name}</h1>
                  <span onClick={() => this.handleDelete(task.id)}>delete</span>
                  <span onClick={() => this.handleEdit(task.id)}>edit</span>
                </div>  
        ))}
        <span onClick={this.handleAddTask}>Add new</span>
      </div>
    )
  }
}