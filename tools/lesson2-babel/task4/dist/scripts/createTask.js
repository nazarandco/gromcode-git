import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, createTask } from './tasksGateway.js';
export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';
  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString()
  }; // = 1. Prepare data

  createTask(newTask) // = 2. Write data to db
  .then(() => getTasksList()) // = 3. Read new data from server
  .then(newTasksList => {
    setItem('tasksList', newTasksList); // = 4. Save new data to front-end storage

    renderTasks(); // = 5. Update UI based on new data
  });
}; // 1. Prepare data
// 2. Write data to db
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data