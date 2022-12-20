import React from "react";
import { useSelector } from "react-redux";
import { selectActiveTodos } from "../redux/selectors/todoSelector";

const ItemsLeft = () => {
  const activeTodos = useSelector(selectActiveTodos);
  return <span className="items-left">{activeTodos.length} items left</span>;
};

export default ItemsLeft;
