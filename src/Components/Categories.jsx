import {  NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted bg-base-100 w-full py-10">
      {categories.map((category) => (
        <NavLink key={category.category} to={`/category/${category.category}`} role="tab" className="tab flex-1">
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
