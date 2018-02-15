import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

import React from 'react';
import { connect } from 'react-redux';

let input;

const Activities = ({ activities, addTaskHandler, createTaskName }) => (
  <div
    id="activities"
    style={{
      display: 'flex',
      width: '15vw',
      minWidth: '15vw',
      margin: '10px',
      flexDirection: 'column'
    }}
  >
    <Paper style={{ padding: '10px' }} zDepth={1}>
      <Subheader style={{ padding: '0' }}>Add Card</Subheader>
      <TextField
        name="addTask"
        value={activities.defaultTaskName}
        floatingLabelText={'Enter card title'}
        floatingLabelStyle={{'fontSize': '12px'}}
        fullWidth={true}
        onChange={e => {
          createTaskName(e.target.value);
        }}
      />
      <RaisedButton
        type="submit"
        label="Add task"
        primary={true}
        style={{ boxShadow: 'none' }}
        fullWidth={true}
        onClick={e => {
          addTaskHandler(activities.defaultTaskName);
          activities.defaultTaskName = '';
        }}
      />
    </Paper>
    <List />
  </div>
);
export default Activities;
