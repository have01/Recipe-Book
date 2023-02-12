import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className="min-h-[80vh] flex flex-col items-center ">
            <div className="flex flex-col justify-center items-between p-2">
              {cart.map((item) => {
                return <CartItem key={item.recipe.calories} item={item} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">
              Nothing in Saved Recepie
            </h1>
            <Link to={"/"}>
              <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
                Save Now
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
