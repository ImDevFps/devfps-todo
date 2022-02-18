import React from "react";
import {
  TasksContainer,
  TasksHeader,
  TasksBody,
  AddButton,
  TaskCont,
} from "./Tasks.styles";
import Checkbox from "@mui/material/Checkbox";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { ToggleFormHidden } from "../../redux/todos/todos.action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectFormHidden,
  selectTodosList,
} from "./../../redux/todos/todos.selector";
import {
  completeTask,
  updatingTodo,
  deleteTodo,
} from "./../../redux/todos/todos.action";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Tasks = ({
  todos,
  ToggleFormHidden,
  completeTask,
  updatingTodo,
  hidden,
  deleteTodo,
}) => {
  return (
    <TasksContainer>
      <TasksHeader>Tasks</TasksHeader>
      {todos.map((todo, idx) => (
        <TasksBody key={idx}>
          <Checkbox
            icon={<CircleOutlinedIcon />}
            checkedIcon={<CircleRoundedIcon />}
            checked={todo.complete}
            sx={{
              color: "gray",
              "&.Mui-checked": {
                color: "#ff7a00",
              },
            }}
            onClick={() => completeTask(todo)}
          />
          <TaskCont>
            <span onClick={() => updatingTodo(todo)}>{todo.title}</span>
            <DeleteOutlineOutlinedIcon onClick={() => deleteTodo(todo)} />
          </TaskCont>
        </TasksBody>
      ))}
      {hidden ? <AddButton color='primary' onClick={ToggleFormHidden} /> : ""}
    </TasksContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodosList,
  hidden: selectFormHidden,
});

const mapDispatchToProps = (dispatch) => ({
  ToggleFormHidden: () => dispatch(ToggleFormHidden()),
  completeTask: (todo) => dispatch(completeTask(todo)),
  updatingTodo: (todo) => dispatch(updatingTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
