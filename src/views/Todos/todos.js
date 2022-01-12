import { createToDo, getToDos, updateTodo } from '../../services/todos';
import { useState, useEffect } from 'react';
import Todolist from '../../components/TodoList/Todolist';
import TodoForm from '../../components/TodoList/TodoForm';

export default function Todos() {
  const [tasks, setTasks] = useState('');
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getToDos();
      setTodos(data);
    };
    fetchData();
  }, []);

  const saveButton = async (e) => {
    e.preventDefault();
    try {
      await createToDo(tasks);
      setMessage('Success!');
    } catch (e) {
      setMessage('Failed, try again.');
    }
  };

  const updateButton = async (task) => {
    try {
      await updateTodo(task.id, task.task, !task.is_complete);
      const data = await getToDos();
      setTodos(data);
      setMessage('Done with your task!');
    } catch {
      setMessage('Failed to update');
    }
  };

  return (
    <div>
      <Todolist todos={todos} updateButton={updateButton} />
      <TodoForm saveButton={saveButton} setTasks={setTasks} message={message} />
    </div>
  );
}

// task state
// list of tasks
// useeffect that grabs all tasks associated with that user
// put my todo component under the button
