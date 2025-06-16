import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import nutritionImg from "../assets/images/nutrition.png";

const CoffeeDetails = () => {
  const coffeesData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const [coffee, setCoffee] = useState({});

  const {
    name,
    image,
    ingredients,
    nutrition_info,
    description,
    making_process,
    rating,
    popularity,
  } = coffee;

  useEffect(() => {
    const singleCoffeeData = [...coffeesData].find((coffee) => coffee.id == id);
    setCoffee(singleCoffeeData);
  }, [coffeesData, id]);
  return (
    <div className="my-12">
      {/* description */}
      <h1 className="text-3xl font-thin mb-10">{description}</h1>
      {/* image */}
      <figure className="w-full h-full object-cover overflow-hidden rounded-2xl shadow-xl">
        <img className="w-full h-full" src={image} alt="" />
      </figure>
      {/* title and favourite button */}
      <div className="flex justify-between items-center my-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-thin"> {name} </h1>
          <p className=" font-medium">Popularity : {popularity} </p>
          <p className=" font-medium">Rating : {rating} </p>
        </div>
        <div>
          <button className="btn btn-warning">Add Favourite</button>
        </div>
      </div>
      {/* making process */}
      <div className="space-y-3 my-10">
        <h1 className="text-3xl font-thin"> Making Process : </h1>
        <p className=" font-medium">{making_process} </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          {/* ingredients */}
          <div>
            <h1 className="text-3xl font-thin"> Ingredients : </h1>
            <ul className=" font-semibold my-10 ml-14 space-y-4">
              {ingredients &&
                ingredients.map((i) => (
                  <li key={i} className="list-disc">
                    {i}
                  </li>
                ))}
            </ul>
          </div>
          {/* nutrition */}
          <div>
            <h1 className="text-3xl font-thin"> Nutrition : </h1>
            <ul className=" font-semibold my-10 ml-14 space-y-4">
              {nutrition_info &&
                Object.keys(nutrition_info).map((i) => (
                  <li key={nutrition_info[i]} className="list-disc">
                    {i} : {nutrition_info[i]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <img className="w-96 h-96 object-cover" src={nutritionImg} alt="" />
        </div>
      </div>
      <button onClick={()=>navigate('/coffees')} className="btn btn-warning text-xl font-bold mt-12">&lt;</button>
    </div>
  );
};

export default CoffeeDetails;
