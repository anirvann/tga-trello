import { connect } from 'react-redux';
import tasks from '../actions';
import Activities from '../components/Activities';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  addTaskHandler: taskName => {
    if (!taskName) {
      return;
    }
    dispatch(tasks.addTask(taskName));
  },
  createTaskName: taskName => {
    dispatch(tasks.createTaskName(taskName));
  }
});

const ActivitiesContainer = connect(mapStateToProps, mapDispatchToProps)(
  Activities
);

export default ActivitiesContainer;
