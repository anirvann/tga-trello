const addTask = title => ({
  type: 'ADD_TASK',
  id: 123,
  title: title,
  defaultCardName: '',
  cards: []
});

const createTaskName = taskName => ({
  type: 'CREATE_TASK_NAME',
  taskName: taskName
});

const createCardName = (taskId, cardName) => ({
  type: 'CREATE_CARD_NAME',
  taskId: taskId,
  cardName: cardName
});

const updateTaskTitle = (newTitle, taskId) => ({
  type: 'UPDATE_TASK_TITLE',
  taskId: taskId,
  title: newTitle
});

const updateCardContent = (cardId, cardNewContent, taskId) => ({
  type: 'UPDATE_CARD_CONTENT',
  taskId: taskId,
  cardId: cardId,
  newContent: cardNewContent
});

const addCard = (taskId, cardContent) => ({
  type: 'ADD_CARD',
  taskId: taskId,
  cardContent: cardContent
});

export default {
  addTask,
  updateTaskTitle,
  addCard,
  createTaskName,
  createCardName,
  updateCardContent
};
