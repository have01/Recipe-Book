import React from "react";
import { Delete } from "@mui/icons-material";
import { remove } from "../redux/Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
const CartItem = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();
  const id = Math.round(item.recipe.calories);

  return (
    <>
      <div className="flex items-center p-5 justify-between bg-violet-200 mt-7 mb-2 rounded-xl">
        <Link to="/recipedetail" className="read_more_link" state={item}>
          <div className="flex p-3">
            <img src={item.recipe.image} className="h-28 rounded-lg" alt="" />
            <div className="ml-10 self-start space-y-5">
              <h1 className="text-xl mt-5 text-purple-700 font-semibold">
                {item.recipe.label}
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CartItem;
