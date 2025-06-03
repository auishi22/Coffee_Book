import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCards = () => {
  const { category } = useParams();
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const filteredByCategory = [...coffeesData].filter(
      (coffee) => coffee.category === category
    );
    setCoffees(filteredByCategory);
  }, [coffeesData, category]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};

export default CoffeeCards;
