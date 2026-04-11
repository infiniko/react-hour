import { useState } from "react";
import Title from "./components/Title";
import Menu from "./components/Menu";
import menu from "./data";
import Categories from "./components/Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filteredItems = (category) => {
    if (category === "all") setMenuItems(menu);
    else {
      setMenuItems(menu.filter((item) => item.category === category));
    }
  };
  return (
    <main className="menu">
      <Title text="our menu" />
      <Categories categories={categories} filteredItems={filteredItems} />
      <Menu items={menuItems} />
    </main>
  );
};
export default App;
