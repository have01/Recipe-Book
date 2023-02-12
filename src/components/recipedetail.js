import React from "react";
import { useLocation } from "react-router-dom";
const recipedetail = () => {
  const data = useLocation();
  const details = data.state.recipe;
  console.log(data);
  return (
    <>
      <div className="w-full flex md:flex-row flex-col items-center justify-center mt-7 ml-10">
        <img
          src={data.state.recipe.image}
          className="h-[300px] w-[300px] m-10  object-cover"
        />
        <div>
          {" "}
          <ol start={1}>
            <h1 className=" hover:text-purple-500 transition duration-300 ease-in text-xl text-purple-500 ">
              Ingredients of {details.label}
            </h1>
            {details.ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
        </div>
      </div>
      {/* <div className="w-full flex flex-row items-center justify-center mt-7 ml-10">
        <ol>
          <li>Calories :{details.calories} </li>
          <li>CuisineType : {details.cuisineType}</li>
        </ol>
      </div> */}
    </>
  );
};

export default recipedetail;
