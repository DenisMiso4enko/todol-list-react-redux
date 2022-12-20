import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../redux/actionCreators/themeActions";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const Header = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };
  return (
    <header className="header">
      <h1 className="title">TODO</h1>
      <button className="btn btn-toggle" onClick={handleToggleTheme}>
        {theme === "light" ? <IoMoonSharp /> : <IoSunnySharp />}
      </button>
    </header>
  );
};

export default Header;
