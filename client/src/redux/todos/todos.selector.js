import { createSelector } from "reselect";

const selectTodos = (state) => state.todos;

export const selectTodosList = createSelector(
  [selectTodos],
  (todos) => todos.todosList
);

export const selectEditing = createSelector(
  [selectTodos],
  (todo) => todo.editing
);

export const selectFormHidden = createSelector(
  [selectTodos],
  (form) => form.hidden
);
