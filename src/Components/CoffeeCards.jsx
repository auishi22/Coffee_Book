import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCards = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...coffeesData].filter(
        (coffee) => coffee. category === category
      );
      setCoffees(filteredByCategory);
    } else {
      setCoffees(coffeesData.slice(0, 6));
    }
  }, [coffeesData, category]);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 ">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
      <div className="flex justify-center p-10">
        <button className="btn bg-yellow-400 rounded-lg border-none" onClick={()=>navigate('/coffees')}>View All</button>
      </div>
    </>
  );
};

export default CoffeeCards;
