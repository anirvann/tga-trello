/* import React, { Component } from 'react'
// import TaskList from './Board.data'
import RaisedButton from 'material-ui/RaisedButton'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: TaskList.tasks
    }
  }

  updateTaskTitle = (i, e) => {
    let tasks = this.state.tasks
    tasks.splice(i, 1, { title: e.target.value, cards: tasks[i].cards })
    this.setState({
      tasks: tasks
    })
  }

  updateCardContent = (i, parentId, e) => {
    let tasks = this.state.tasks
    let task = tasks[parentId]

    task.cards[i].content = e.target.value
    this.setState({
      tasks: tasks
    })
  }

  render() {
    const task = this.state.tasks.map((task, idx) => (
      <Task
        task={task}
        updateTaskTitle={this.updateTaskTitle}
        updateCardContent={this.updateCardContent}
        key={idx}
        idx={idx}
      />
    ))

    return (
      <div id="board" style={{display: 'flex', flexGrow: 1, overflowX: 'auto'}}>
        {task}
      </div>
    )
  }
}

export default Board
 */

import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

/* const task = tasks.map((task, idx) => (
  <div>task.title</div>
)) */

const Board = ({ tasks, onTaskTitleUpdate, onCardContentUpdate, addCardHandler, createCardName }) => (
  <div id="board" style={{ display: 'flex', flexGrow: 1, overflowX: 'auto' }}>
    {tasks.map((task, idx) => (
      <Task
        task={task}
        onTaskTitleUpdate={onTaskTitleUpdate}
        onCardContentUpdate={onCardContentUpdate}
        addCardHandler={addCardHandler}
        createCardName={createCardName}
        key={idx}
        id={idx + 1}
      />
    ))}
  </div>
);

export default Board;