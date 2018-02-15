import { connect } from 'react-redux';
import tasks from '../actions';
import Board from '../components/Board';

const mapStateToProps = state => {
  let tasks = state.tasks;
  return tasks;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTaskTitleUpdate: function(id, newTitle) {
      dispatch(tasks.updateTaskTitle(newTitle, id));
    },
    onCardContentUpdate: function(cardId, taskId, e) {
      dispatch(tasks.updateCardContent(cardId, e.target.value, taskId));
    },
    addCardHandler: function(taskId, cardContent) {
      if (!cardContent) {
        return;
      }
      dispatch(tasks.addCard(taskId, cardContent));
    },
    createCardName: (taskId, cardName) => {
      dispatch(tasks.createCardName(taskId, cardName));
    }
  };
};

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;
