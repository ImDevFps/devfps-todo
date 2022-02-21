import React from "react";
import { BackArrow, UpCommingContainer } from "./UpComming.styles";
import { createStructuredSelector } from "reselect";
import { selectTodosList } from "./../../redux/todos/todos.selector";
import { connect } from "react-redux";
import Todo from "./../../components/Todo/Todo";

const UpComming = ({ todos, history }) => {
  const projects = todos
    .filter((item) => item.complete === false)
    .sort(function (a, b) {
      return (
        Math.floor(new Date(a.date).getTime() / 1000) -
        Math.floor(new Date(b.date).getTime() / 1000)
      );
    });
  const upCommings = projects.filter((item, idx) => idx < 2);
  return (
    <UpCommingContainer>
      <BackArrow onClick={history.goBack} />
      {upCommings.map((item) => (
        <Todo key={item.id} todo={item}></Todo>
      ))}
    </UpCommingContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodosList,
});

export default connect(mapStateToProps)(UpComming);
