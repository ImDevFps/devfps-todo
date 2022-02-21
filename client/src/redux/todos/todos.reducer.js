import { TodosActionTypes } from "./todos.type";
import { addTodos, completeTodo, deleteTodo, updateTodo } from "./todos.utils";
const INITIAL_STATE = {
  todosList: [],
  hidden: true,
  editing: "",
};
const TodosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosActionTypes.TOGGLE_FORM:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case TodosActionTypes.ADD_TODOS:
      return {
        ...state,
        todosList: addTodos(state.todosList, action.payload),
      };
    case TodosActionTypes.COMPLETE_TODO:
      return {
        ...state,
        todosList: completeTodo(state.todosList, action.payload),
      };
    case TodosActionTypes.UPDATING_TODO:
      return {
        ...state,
        editing: action.payload,
      };
    case TodosActionTypes.UPDATE_TODO:
      return {
        ...state,
        todosList: updateTodo(state.todosList, action.payload),
      };

    case TodosActionTypes.DELETE_TODO:
      return {
        ...state,
        todosList: deleteTodo(state.todosList, action.payload),
      };
    default:
      return state;
  }
};

export default TodosReducer;
