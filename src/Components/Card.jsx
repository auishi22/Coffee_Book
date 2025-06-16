import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return (
    <Link to={`/coffee/${id}`} className="card bg-base-100 w-96 shadow-xl transition-transform duration-300 hover:scale-105">
      <figure className="w-full h-60 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className=" text-xl text-gray-700 font-semibold">Name : {name}</h2>
        <div className="text-base text-gray-500 font-medium">
          <p> Category : {category} </p>
          <p> Type : {type} </p>
          <p> Rating : {rating} </p>
          <p> Origin : {origin} </p>
          <p> Popularity : {popularity} </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
