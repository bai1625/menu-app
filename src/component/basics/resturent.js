import React from "react";
import "./Style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.catagory;
    })
  ),
];
const Resturent = () => {
  const [menuData, setMenuData] = React.useState(Menu);
  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.catagory === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <nav className="navbar ">
        <div className="btn-group ">
          <button
            className="btn-group__item"
            onClick={() => filterItem("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("evening snacks")}
          >
            Snacks
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button>
        </div>
      </nav>

      <MenuCard menuData={menuData} />
    </>
  );
};
export default Resturent;
