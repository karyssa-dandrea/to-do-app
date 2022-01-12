// state tracking what they are putting into the form
import React from 'react';

export default function TodoForm({ saveButton, setTasks }) {
  return (
    <div>
      <form>
        <label>Add a new task:</label>
        <input type="text" onChange={(e) => setTasks(e.target.value)} />
        <button onClick={saveButton}>Add Task</button>
      </form>
    </div>
  );
}
