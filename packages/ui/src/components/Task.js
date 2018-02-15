import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import _ from 'lodash';
import CardList from './CardList';
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';


let input 

const styles = {
  task: {
    width: '200px',
    flexShrink: 0,
    padding: '10px',
    margin: '10px'
  }
};
/* 
export default class Tasks extends Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
    onTaskTitleUpdate: PropTypes.func.isRequired,
    onCardContentUpdate: PropTypes.func.isRequired,
    id: PropTypes.number
  }; */

/* shouldComponentUpdate(newProps, newState) {
    return !_.isMatch(this.props.task, newProps.task);
  } */
const Task = ({
  task,
  onTaskTitleUpdate,
  onCardContentUpdate,
  addCardHandler,
  createCardName
}) => (
  <Paper style={styles.task}>
    <TextField
      name="taskTitle"
      value={task.title}
      underlineStyle={{ border: 'none' }}      
      fullWidth={true}
      onChange={e => {
        onTaskTitleUpdate(task.id, e.target.value);
      }}
    />
    <CardList
      cards={task.cards}
      updateCardContent={onCardContentUpdate}
      parentId={task.id}
    />
    <TextField
      name="addCard"
      value={task.defaultCardName}
      fullWidth={true}
      onChange={e => {
        createCardName(task.id, e.target.value);
      }}
    />
    <RaisedButton
      type="submit"
      label="Add task"
      primary={true}
      style={{ boxShadow: 'none' }}
      fullWidth={true}
      onClick={e => {
        addCardHandler(task.id, task.defaultCardName);
        task.defaultCardName = '';
      }}
    />
  </Paper>
);

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onTaskTitleUpdate: PropTypes.func.isRequired,
  onCardContentUpdate: PropTypes.func.isRequired
};

/* export default Todo
  render() {
    const task = this.props.task;
    return (
      <List style={styles.task}>
        <Subheader>
          <TextField
            name="taskTitle"
            value={task.title}
            underlineStyle={{ border: 'none' }}
            onChange={this.props.onTaskTitleUpdate.bind(this, this.props.id)}
          />
        </Subheader>
        <CardList
          cards={task.cards}
          updateCardContent={this.props.onCardContentUpdate}
          parentId={this.props.id}
        />
      </List>
    );
  }
} */

export default Task;
