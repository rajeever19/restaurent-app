import React from "react";

const Categories = ({ items, selectedItem, onItemSelect }) => {
  return (
    <>
      {selectedItem ? (
        <div
          className="cate_element text-secondary my-2"
          onClick={() => onItemSelect(null)}
        >
          {" "}
          <span className="rounded-circle">x</span> Clear Filter
        </div>
      ) : (
        ""
      )}
      {items.map((a) => (
        <div
          key={a._id + "side"}
          className={
            selectedItem === a
              ? "cate_element text-light my-2 bg-secondary"
              : "cate_element text-secondary my-2 "
          }
          onClick={() => onItemSelect(a)}
        >
          {a.name}
        </div>
      ))}
    </>
  );
};

export default Categories;
