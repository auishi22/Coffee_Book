import React from "react";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Heading */}
      <Heading
        title={"Browse Coffees by Category"}
        description={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste"
        }
      />
      {/* Categories tab section */}
      <Categories categories={categories} />

      {/* Dynamic nasted components */}
      <Outlet />
    </div>
  );
};

export default Home;
