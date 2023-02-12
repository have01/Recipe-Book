import React, { useEffect } from "react";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StarsIcon from "@mui/icons-material/Stars";
import { useAuth0 } from "@auth0/auth0-react";
import "../index.css";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    isLoading,
    logout,
    getAccessTokenSilently,
  } = useAuth0();
  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        await getAccessTokenSilently();
      }
    })();
  }, [getAccessTokenSilently, isAuthenticated]);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto box">
        <Link to={"/"}>
          <div className="ml-5">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Ffood-logo&psig=AOvVaw2-l3FyLK-LKjI-UJnYm8zd&ust=1676293584499000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLC1-K2GkP0CFQAAAAAdAAAAABAE"
              alt=""
              srcset=""
            />
            <h1 className="bg-violet-900 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold logo cursor-pointer tracking-wider">
              Recipe Book
            </h1>
          </div>
        </Link>
        <div className="flex list-none items-center space-x-6 md:mr-5 text-gray-700 -tracking-tighterr font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Home
            </li>
          </Link>

          {user ? (
            <div className="  flex justify-center items-center  rounded-full top- text-black">
              <img
                className="w-6 h-6 md:ml-1 md:mr-1 rounded-full"
                src={user.picture}
                alt={user.name}
              />{" "}
              <p className="hover:text-purple-600 hidden md:block">
                {" "}
                Hello,{user.name}
              </p>
            </div>
          ) : null}

          {!isAuthenticated ? (
            <button onClick={() => loginWithRedirect()}>Log In</button>
          ) : (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          )}
          <Link to={"/cart"}>
            <div className="relative">
              <StarsIcon className="text-2xl mr-3 cursor-pointer hover:text-purple-600 transition transform duration-200" />

              {cart.length > 0 && (
                <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
