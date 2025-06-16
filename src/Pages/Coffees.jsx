import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const Coffees = () => {
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeesData);

  const handleSortBy = (sortby) => {
    if (sortby == "popularity") {
      // sort by popularity
      const sorted=[...coffeesData].sort((a,b)=>b.popularity-a.popularity)
      setCoffees(sorted)
    } else if (sortby == "rating") {
      // sort by rating
      const sorted=[...coffeesData].sort((a,b)=>b.rating-a.rating)
      setCoffees(sorted)
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center my-12">
        <div>
          <h2 className="text-3xl font-thin">
            Sort Coffee&apos;s by Popularity & Rating -&gt;
          </h2>
        </div>
        <div className="space-x-3">
          <button onClick={()=>handleSortBy('popularity')} className="btn btn-warning text-black">
            Sort by Popularity
          </button>
          <button onClick={()=>handleSortBy('rating')} className="btn btn-warning text-black">Sort by Rating</button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 my-12 ">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Coffees;
