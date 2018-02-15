const initialState = {
  defaultTaskName: '',
  history: []
};

const activities = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TASK_NAME':
      return {
        history: state.history,
        defaultTaskName: action.taskName
      };
    default:
      return state;
  }
};

export default activities;
