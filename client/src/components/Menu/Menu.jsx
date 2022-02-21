import React from "react";
import {
  EmptyBlock,
  MenuContainer,
  MenuItems,
  CopyRight,
  Items,
} from "./Menu.styles";
import { selectShowMenu } from "./../../redux/Menu/menu.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { toggleMenu } from "./../../redux/Menu/menu.actions";
import { AiOutlineInfoCircle } from "react-icons/ai";
import UpcomingOutlinedIcon from "@mui/icons-material/UpcomingOutlined";
import { CgMenuGridO } from "react-icons/cg";

const Menu = ({ showMenu, toggleMenu }) => {
  const options = { weekday: "long", day: "numeric", month: "short" };
  const today = new Date().toLocaleDateString("en-us", options);
  return (
    <MenuContainer style={{ left: `${showMenu ? "0" : ""}` }}>
      <EmptyBlock>
        <CgMenuGridO onClick={toggleMenu} />
        <span>{today}</span>
      </EmptyBlock>
      <MenuItems>
        <UpcomingOutlinedIcon style={{ marginRight: "0.5rem" }} />
        <Items to='/up-comming'>up-comming </Items>
      </MenuItems>
      <MenuItems>
        <AiOutlineInfoCircle style={{ marginRight: "0.5rem" }} />
        <Items to='/info'>info</Items>
      </MenuItems>
      <CopyRight>&copy;DevFps 2022</CopyRight>
    </MenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  showMenu: selectShowMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
