export const addTodos = (todos, todoToAdd) => {
  const existingTodos = todos.find((todo) => todo.id === todoToAdd.id);
  if (existingTodos) {
    return todos.map((todo) => (todo.id === todoToAdd.id ? { ...todo } : todo));
  }
  return [...todos, { ...todoToAdd }];
};

export const completeTodo = (todos, todoToComplete) => {
  const newList = todos.map((todo) =>
    todo.id === todoToComplete.id ? { ...todo, complete: !todo.complete } : todo
  );
  return newList;
};

export const updateTodo = (todos, updatedTodo) => {
  console.log(updatedTodo);
  const newList = todos.map((todo) =>
    todo.id === updatedTodo.id
      ? {
          ...todo,
          title: updatedTodo.title,
          category: updatedTodo.category,
          date: updatedTodo.date,
        }
      : todo
  );
  return newList;
};

export const deleteTodo = (todos, todoToDelete) => {
  const existingTodo = todos.find((todo) => todo.id === todoToDelete.id);

  if (existingTodo) {
    return todos.filter((todo) => todo.id !== todoToDelete.id);
  }

  return todos.map((todo) =>
    todo.id === todoToDelete.id ? { ...todo } : todo
  );
};
