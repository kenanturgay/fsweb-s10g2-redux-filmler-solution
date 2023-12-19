import React from "react";
import { Link, NavLink } from "react-router-dom";
import { removeFavorite } from "../actions/favoritesActions";
import { useSelector, useDispatch } from "react-redux";

const FavoriteMovieList = (props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteReducer.favorites);
  const deleteFavHandler = (id) => {
    console.log("deleteFavHandler");
    dispatch(removeFavorite(id));
  };
  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
      <h5 className="font-bold">Favori Filmler</h5>
      <div className="pt-3 text-sm">
        {favorites.map((movie) => (
          <div key={movie.id}>
            <Link
              className="py-1 flex gap-2 justify-between"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>
            <span
              onClick={() => deleteFavHandler(movie.id)}
              className="material-icons hover:text-red-600 text-[18px]"
            >
              remove_circle
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovieList;
