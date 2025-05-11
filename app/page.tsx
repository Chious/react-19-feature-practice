'use client';

import { addTodo } from '@/actions/todo-action';
import { useActionState, useOptimistic } from 'react';
import { useState } from 'react';

export default function Home() {
  const [optimisticName, setOptimisticName] = useOptimistic('Learn React');
  const [todos, setTodos] = useState<string[]>(['Clean House']);

  const [error, submitAction, isPending] = useActionState(
    async (prevState: string | null, formData: FormData) => {
      const todo = formData.get('todo');
      if (!todo) return 'Todo cannot be empty';
      
      // Apply optimistic update
      setOptimisticName(todo as string);
      
      // Call the server action
      const errorMsg = await addTodo(todo);
      
      if (!errorMsg) {
        // If successful, update the state and clear input
        setTodos(prev => [...prev, todo as string]);
        setOptimisticName('');
      }
      
      return errorMsg;
    },
    null
  );

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <main className="flex flex-col items-center justify-center h-full w-full">
        <h1 className=" font-extrabold text-2xl">我的待辦清單</h1>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
          {isPending && <p>{optimisticName} (Pending)</p>}
        </ul>

        <form
          action={submitAction}
          className="space-y-4 max-w-md mx-auto p-6 bg-slate-50 rounded-lg shadow-md"
        >
          <p className="text-lg font-medium">請輸入待辦事項</p>

          <div>
            <input
              type="text"
              name="todo"
              placeholder="Enter new todo"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isPending ? 'Adding...' : 'Add Todo'}
          </button>
          
          {error && <p className="text-red-500 mt-2">Error: {error}</p>}
        </form>
      </main>
    </div>
  );
}
