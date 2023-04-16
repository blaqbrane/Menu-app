import React, { useState } from "react";

const Categories = ({ categories, selectItem }) => {
  const [active, setActive] = useState("All");
  return (
    <div className="max-w-[400px] mb-12 px-2 mx-auto flex gap-x-4  md:justify-between">
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              selectItem(item);
              setActive(item);
            }}
            style={{ backgroundColor: active === item ? "chocolate" : "" }}
            className="bg-[orange] text-white w-[200px] py-1 rounded text-sm"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
