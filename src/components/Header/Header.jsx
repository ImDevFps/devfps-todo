import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, DateContainer, DaySpan } from "./Header.styles";
import { CgMenuGridO } from "react-icons/cg";
import { BiCalendar } from "react-icons/bi";
import { toggleMenu } from "./../../redux/Menu/menu.actions";
import { connect } from "react-redux";
const Header = ({ toggleMenu }) => {
  const today = new Date();
  return (
    <HeaderContainer>
      <CgMenuGridO onClick={toggleMenu} />
      <DateContainer>
        {today.toLocaleDateString("en-US", { weekday: "long" })},
        <DaySpan>
          {today.toLocaleDateString("en-US", { day: "numeric" })}
        </DaySpan>
      </DateContainer>
      <Link to='/calendar'>
        <BiCalendar color='white' />
      </Link>
    </HeaderContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(null, mapDispatchToProps)(Header);
