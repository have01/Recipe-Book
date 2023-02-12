import React from "react";
import { add, remove } from "../redux/Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import StarIcon from "@mui/icons-material/Star";
import "../index.css";
import StarsIcon from "@mui/icons-material/Stars";
import { useAuth0 } from "@auth0/auth0-react";
const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    isLoading,
    logout,
    getAccessTokenSilently,
  } = useAuth0();
  const addToCart = (event) => {
    if (isAuthenticated) {
      event.stopPropagation();
      dispatch(add(item));
      enqueueSnackbar(`Item added to your cart successfully`, {
        variant: "success",
        autoHideDuration: 3000,
      });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <>
      <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center  gap-3 p-4 h-[340px] mt-10 ml-5 box rounded-xl">
        <div className="h-[180px]">
          <Link to="/recipedetail" className="read_more_link" state={item}>
            <img
              src={item.recipe.image}
              className="h-full w-full rounded-full object-cover"
            />
          </Link>
        </div>
        <div>
          <h1 className="w-40 mt-3 text-gray-700 font-semibold text-lg">
            {item.recipe.label}{" "}
            {cart.some(
              (p) =>
                Math.round(p.recipe.calories) ===
                Math.round(item.recipe.calories)
            ) ? (
              <StarIcon className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />
            ) : (
              <StarsIcon
                onClick={(event) => addToCart(event)}
                className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200"
              />
            )}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Product;
