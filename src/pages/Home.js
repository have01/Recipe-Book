import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import "../index.css";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
const Home = () => {
  const APP_ID = "a0d37b32";
  const APP_KEY = "f9f60e2c85102ae58dc2a9c95767891d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("paneer");
  const [loading, setloading] = useState(true);
  React.useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((response) => {
        const data = response.data.hits;
        setRecipes(data);
        setloading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  if (!recipes) return "No post!";
  const getSearch = (e) => {
    e.preventDefault();
    if (!search) {
      alert("Search cant be blank");
    } else {
      setQuery(search);
      setSearch("");
    }
  };
  console.log(recipes.length);
  return (
    <>
      {loading ? (
        <div class=" h-[300px]  flex items-center justify-center">
          <CircularProgress disableShrink />
        </div>
      ) : (
        <>
          <form
            onSubmit={getSearch}
            className="search-form w-full flex justify-center items-center m-5"
          >
            <input
              className="search-bar box md:w-[450px] sm:w-[250px]  p-3"
              type="text"
              value={search}
              onChange={updateSearch}
              placeholder="Search dish recipe "
            />
            <button
              className="search-button p-3 bg-violet-500 text-white"
              type="Submit"
            >
              <SearchIcon />
            </button>
          </form>
          {recipes.length > 1 ? (
            <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
              {recipes.map((item) => {
                return <Product item={item} />;
              })}
            </div>
          ) : (
            <div className="w-full flex flex-row items-center justify-center mt-7 ml-10 ">
              Search item is not available
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
