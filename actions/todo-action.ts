'use server';

export async function addTodo(todo: FormDataEntryValue | null) {
  // Simulate a network delay to demonstrate optimistic updates
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Validate the todo
  if (!todo || typeof todo !== 'string') {
    return 'Todo cannot be empty';
  }

  if (todo.length < 2) {
    return 'Todo is too short';
  }

  // In a real app, you would save the todo to a database here
  console.log(`New todo added: ${todo}`);

  // Return null if successful (no error)
  return null;
}
