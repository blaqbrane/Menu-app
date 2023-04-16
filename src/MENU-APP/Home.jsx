import React from "react";
import { useState } from "react";
import Categories from "./Categories";
import { Data } from "./data";
import MenuList from "./MenuList";
//allCategories is a list of categories containing 'All' and a new Set of
//categories gotten from mapping through the Data array
const allCategories = ["All", ...new Set(Data.map((item) => item.category))];
console.log(allCategories);
const Home = () => {
  const [categories, setCategories] = useState(allCategories);
  const [itemArray, setitemArray] = useState(Data);
  const selectItem = (category) => {
    if (category === "All") {
      setitemArray(Data);
      return;
    }
    const newitem = Data.filter((data) => data.category === category);
    setitemArray(newitem);
  };
  return (
    <div className=" md:max-w-[1400px] md:mx-auto">
      <h1 className="text-center mt-[20px] text-4xl mb-3 font-bold">
        Our Menu
      </h1>
      <div className="bg-[orange] mx-auto px-1 h-1 w-28 mb-10" />
      <div className="px-1 mt-4">
        <Categories categories={categories} selectItem={selectItem} />
        <MenuList itemArray={itemArray} />
      </div>
    </div>
  );
};

export default Home;
