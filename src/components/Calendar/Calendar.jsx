import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  CalendarContainer,
  CalendarHeader,
  CalendarHeaderText,
  CalendarHeaderArrow,
  CalendarDays,
  Days,
  DayActive,
  CalenderArrows,
  TodosContainer,
} from "./Calendar.styles";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Todo from "./../Todo/Todo";
import { createStructuredSelector } from "reselect";
import { selectTodosList } from "./../../redux/todos/todos.selector";
import { connect } from "react-redux";

const Calendar = ({ todos }) => {
  const daysEl = useRef(null);
  const [cDate, setCDate] = useState("");
  const [days, setDays] = useState([]);
  const [month, setMonth] = useState("");
  const [firstDayIndex, setFirstDayIndex] = useState("");

  const [showTodo, setShowTodo] = useState("");

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date().toLocaleDateString();
  const date = new Date();

  const renderCalendar = () => {
    date.setDate(1);
    setCDate(date);

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const firstDayIndex = date.getDay();

    const days = Array.from(Array(lastDay + 1).keys()).slice(1);

    setDays(days);
    setMonth(months[date.getMonth()]);
    setFirstDayIndex(firstDayIndex);
  };

  useEffect(() => {
    renderCalendar();
  }, []);

  useEffect(() => {
    var now = document.getElementById("now");
    if (now) {
      now.scrollIntoView({
        block: "center",
        behavior: "instant",
      });
    }
  });

  return (
    <CalendarContainer>
      <CalendarHeader>
        <Link to='/'>
          <CalendarHeaderArrow color='white' />
        </Link>
        <CalendarHeaderText>
          <span>calendar</span>
          <CalenderArrows>
            <BsArrowLeftShort
              onClick={() => {
                date.setMonth(cDate.getMonth() - 1);
                renderCalendar();
              }}
            />
            <span style={{ fontSize: "1rem" }}>{month}</span>
            <BsArrowRightShort
              onClick={() => {
                date.setMonth(cDate.getMonth() + 1);
                renderCalendar();
              }}
            />
          </CalenderArrows>
        </CalendarHeaderText>
      </CalendarHeader>

      <CalendarDays ref={daysEl} id='today'>
        {days.map((i) =>
          i === new Date().getDate() &&
          cDate.getMonth() === new Date().getMonth() ? (
            <DayActive
              id='now'
              key={i}
              onClick={() => {
                const year = new Date().getFullYear();
                const month = cDate.getMonth();

                setShowTodo(`${month + 1}/${i}/${year}`);
              }}>
              <span>{i}</span>
              <span>{weekDays[(i + 1) % 7]}</span>
            </DayActive>
          ) : (
            <Days
              key={i}
              onClick={() => {
                const year = new Date().getFullYear();
                const month = cDate.getMonth();

                setShowTodo(`${month + 1}/${i}/${year}`);
              }}>
              <span>{i}</span>
              <span>{weekDays[(firstDayIndex + i - 1) % 7]}</span>
            </Days>
          )
        )}
      </CalendarDays>
      <TodosContainer>
        {showTodo
          ? todos.map(
              (item) =>
                new Date(item.date).toLocaleDateString() ===
                  new Date(showTodo).toLocaleDateString() && (
                  <Todo key={item.id} todo={item} />
                )
            )
          : todos.map(
              (item) =>
                new Date(item.date).toLocaleDateString() === today && (
                  <Todo key={item.id} todo={item} />
                )
            )}
      </TodosContainer>
    </CalendarContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodosList,
});

export default connect(mapStateToProps)(Calendar);
