import { client, checkError } from './client';

export async function createToDo(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function getToDos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function updateTodo({ id, task, is_complete }) {
  const resp = await client.from('todos').update({ task, is_complete }).eq('id', id);
  return checkError(resp);
}

export async function deleteTodo({ id }) {
  const resp = await client.from('todos').delete().match({ id });
  return checkError(resp);
}
