import { TodosActionTypes } from "./todos.type";

export const addToTodo = (todo) => ({
  type: TodosActionTypes.ADD_TODOS,
  payload: todo,
});

export const ToggleFormHidden = () => ({
  type: TodosActionTypes.TOGGLE_FORM,
});

export const completeTask = (todo) => ({
  type: TodosActionTypes.COMPLETE_TODO,
  payload: todo,
});

export const updatingTodo = (todo) => ({
  type: TodosActionTypes.UPDATING_TODO,
  payload: todo,
});

export const updateTodo = (todo) => ({
  type: TodosActionTypes.UPDATE_TODO,
  payload: todo,
});

export const deleteTodo = (todo) => ({
  type: TodosActionTypes.DELETE_TODO,
  payload: todo,
});
