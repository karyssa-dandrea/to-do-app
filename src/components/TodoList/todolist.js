import React from 'react';

export default function Todolist({ todos, updateButton }) {
  return (
    <>
      {todos.map((task) => (
        <div className="tasks" key={task.id}>
          <label>
            <input type="checkbox" checked={task.is_complete} onChange={() => updateButton(task)} />
            {task.task}
          </label>
        </div>
      ))}
    </>
  );
}
