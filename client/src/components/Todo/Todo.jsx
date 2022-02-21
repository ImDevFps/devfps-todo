import React from "react";
import { TodoContainer, TodoSpan } from "./Todo.styles";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { deleteTodo } from "../../redux/todos/todos.action";
import { connect } from "react-redux";

const Todo = ({ todo, deleteTodo }) => {
  const { title, category, date, complete } = todo;

  return (
    <TodoContainer
      style={{
        borderLeft:
          (category === "meeting" && "0.5rem solid #ff7a00") ||
          (category === "inbox" && "0.5rem solid #1976d2") ||
          (category === "trip" && "0.5rem solid cyan"),
      }}>
      <TodoSpan
        style={{
          color:
            (category === "meeting" && "#ff7a00") ||
            (category === "inbox" && "#1976d2") ||
            (category === "trip" && "cyan"),
        }}>
        {category}
      </TodoSpan>
      <TodoSpan
        style={{
          textDecoration: complete && "line-through",
          opacity: complete && "0.5",
        }}>
        <span>{title}</span>
        <DeleteOutlineOutlinedIcon onClick={() => deleteTodo(todo)} />
      </TodoSpan>
      <TodoSpan style={{ color: "#aaa", fontSize: "0.85rem" }}>{date}</TodoSpan>
    </TodoContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
});

export default connect(null, mapDispatchToProps)(Todo);
