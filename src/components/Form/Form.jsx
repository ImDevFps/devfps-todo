import React, { useEffect, useState } from "react";
import {
  FormContainer,
  FramerContainer,
  DatePicker,
  CustomForm,
  CloseButton,
  SubmitButton,
} from "./Form.styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { addToTodo, ToggleFormHidden } from "./../../redux/todos/todos.action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectEditing,
  selectFormHidden,
} from "../../redux/todos/todos.selector";
import { AiFillCloseCircle } from "react-icons/ai";

const Form = ({ addToTodo, form, ToggleFormHidden }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const [height, setHeight] = useState("30vh");

  var d1 = new Date();
  // const myDate = date.split("-");
  // const newDate = new Date(myDate[0], myDate[1] - 1, myDate[2]);

  useEffect(() => {
    form ? setHeight("30vh") : setHeight("-50vh");
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addToTodo({
      id: d1.getTime(),
      title,
      category,
      date,
      complete: false,
    });
  };

  return (
    <FramerContainer
      animate={{ y: height }}
      transition={{ type: "Inertia", duration: 0.5 }}>
      <FormContainer>
        <span>Create Form</span>
        <CloseButton>
          <AiFillCloseCircle onClick={ToggleFormHidden} />
        </CloseButton>
        <CustomForm onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label='Title'
            id='fullWidth'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            <InputLabel id='demo-simple-select-standard-label'>
              Category
            </InputLabel>
            <Select
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              label='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <SubmitButton type='submit'>submit</SubmitButton>
        </CustomForm>
      </FormContainer>
    </FramerContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  form: selectFormHidden,
  editing: selectEditing,
});

const mapDispatchToProps = (dispatch) => ({
  addToTodo: (todo) => dispatch(addToTodo(todo)),
  ToggleFormHidden: () => dispatch(ToggleFormHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
