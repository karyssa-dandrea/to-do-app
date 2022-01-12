import React from 'react';

export default function Todolist({ tasks, checked, saveButton }) {
  return (
    <div>
      {tasks.map((tasks) => (
        <div className="tasks" key={tasks.id}>
          <label>
            <input type="checkbox" checked={checked} onChange={saveButton} />
            {tasks.task}
          </label>
        </div>
      ))}
    </div>
  );
}

//map and render through here
