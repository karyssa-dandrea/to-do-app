import { getToDos } from '../../services/todos';
import { useState, useEffect } from 'react';

export default function Todos() {
  const [tasks, setTasks] = useState('');
  const [todos, setTodos] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getToDos();
      setTodos(data);
      setClick[false];
    };
    fetchData();
  }, [click]);

  return (
    <div>
      <button onClick={() => setClick(true)}>Add Task</button>
    </div>
  );
}

// const task, settask =usestate('');

// task state
// list of tasks
// useeffect that grabs all tasks associated with that user
// put my todo component under the button
