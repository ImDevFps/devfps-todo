import React from "react";
import { HomepageContainer } from "./HomePage.styles";
import Header from "./../../components/Header/Header";
import Progress from "./../../components/Progress/Progress";
import Projects from "./../../components/Projects/Projects";
import Tasks from "./../../components/Tasks/Tasks";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectEditing,
  selectFormHidden,
  selectTodosList,
} from "../../redux/todos/todos.selector";
import Form from "./../../components/Form/Form";
import EditForm from "../../components/EditForm/EditForm";
import Menu from "./../../components/Menu/Menu";

const HomePage = ({ editing, form, todos }) => {
  return (
    <HomepageContainer>
      <Header />
      <Menu />
      <Progress todos={todos} />
      <Projects todos={todos} />
      <Tasks />
      {form ? "" : <Form />}
      {editing !== "" ? <EditForm /> : ""}
    </HomepageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodosList,
  form: selectFormHidden,
  editing: selectEditing,
});

export default connect(mapStateToProps)(HomePage);
