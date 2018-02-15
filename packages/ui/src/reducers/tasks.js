import _ from 'lodash';

const initialState = {
  tasks: []
};
const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: _.concat(state.tasks, {
          id: state.tasks.length + 1,
          title: action.title,
          position: state.tasks.length,
          cards: []
        })
      };
    case 'REMOVE_TASK':
    case 'REORDER_TASK':
    case 'ADD_CARD':
      return {
        ...state,
        tasks: _.map(state.tasks, function(task) {
          if (action.taskId === task.id) {
            task.cards.push({
              cardContent: action.cardContent,
              position: task.cards.length + 1,
              parentId: task.id
            });
          }
          return task;
        })
      };
    case 'UPDATE_TASK_TITLE':
      return {
        ...state,
        tasks: _.map(state.tasks, task => {
          if (action.taskId === task.id) {
            task.title = action.title;
          }
          return task;
        })
      };
    case 'CREATE_CARD_NAME':
      return {
        ...state,
        tasks: _.map(state.tasks, task => {
          if (action.taskId === task.id) {
            task.defaultCardName = action.cardName;
          }
          return task;
        })
      }
    case 'UPDATE_CARD_CONTENT':
      return {
        ...state,
        tasks: _.map(state.tasks, task => {
          if (action.taskId === task.id) {
            task.cards[action.cardId].cardContent = action.newContent;
          }
          return task;
        })
      }
    default:
      return state;
  }
};

export default tasks;
