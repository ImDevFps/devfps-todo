import React, { useState, useEffect } from "react";
import {
  FormContainer,
  FramerContainer,
  DatePicker,
  CustomForm,
  SubmitButton,
} from "../Form/Form.styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { updateTodo, updatingTodo } from "../../redux/todos/todos.action";
import { createStructuredSelector } from "reselect";
import { selectEditing } from "../../redux/todos/todos.selector";
import { connect } from "react-redux";
import { CloseButton } from "./../Form/Form.styles";
import { AiFillCloseCircle } from "react-icons/ai";

const EditForm = ({ editing, updateTodo, updatingTodo }) => {
  const [editTitle, setEditTitle] = useState(editing.title);
  const [editCategory, setEditCategory] = useState(editing.category);
  const [editDate, setEditDate] = useState(editing.date);

  const [height, setHeight] = useState("30vh");

  useEffect(() => {
    setEditTitle(editing.title);
    setEditCategory(editing.category);
    setEditDate(editing.date);

    editing !== "" ? setHeight("-50vh") : setHeight("30vh");
  }, [editing]);

  const EditSubmit = async (e) => {
    e.preventDefault();

    await updateTodo({
      id: editing.id,
      title: editTitle,
      category: editCategory,
      date: editDate,
    });

    await updatingTodo("");
  };
  return (
    <FramerContainer
      animate={{ y: height }}
      transition={{ type: "Inertia", duration: 0.5 }}>
      <FormContainer>
        <CloseButton>
          <AiFillCloseCircle onClick={() => updatingTodo("")} />
        </CloseButton>
        <CustomForm onSubmit={EditSubmit}>
          <TextField
            fullWidth
            label={"Title"}
            id='fullWidth'
            value={editTitle ? editTitle : ""}
            onChange={(e) => setEditTitle(e.target.value)}
            color='primary'
            focused
            sx={{ color: "red !important" }}
            required
          />
          <FormControl
            focused
            fullWidth
            variant='standard'
            sx={{ marginTop: "1rem", marginBottom: "1rem", minWidth: 120 }}>
            <InputLabel id='select-standard-label'>Category</InputLabel>
            <Select
              labelId='select-standard-label'
              label='category'
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
              sx={{
                color: "white",
              }}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='inbox'>Inbox</MenuItem>
              <MenuItem value='meeting'>Meeting</MenuItem>
              <MenuItem value='trip'>Trip</MenuItem>
            </Select>
          </FormControl>
          <DatePicker
            type='date'
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
            color='secondary'
          />
          <SubmitButton type='submit'>sumbit</SubmitButton>
        </CustomForm>
      </FormContainer>
    </FramerContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  editing: selectEditing,
});

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  updatingTodo: () => dispatch(updatingTodo("")),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
