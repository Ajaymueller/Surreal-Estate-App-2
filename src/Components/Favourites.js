import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";
import { getProperties, deleteFavourite } from "../requests";

const Favourites = ({ userID }) => {
  const [favourites, setFavourites] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  useEffect(() => {
    if (favourites.length === 0) {
      getProperties(
        setFavourites,
        setAlert,
        "Favourite?populate=propertyListing"
      );
    }
  }, [favourites]);

  useEffect(() => {
      if (!userID) {
         setFavourites([]);
         setAlert({ message: "No user logged in", isSuccess: false });
       }
     }, [userID]);

  const handleDelete = (id) => deleteFavourite(id, setAlert);

  return (
    <div>
      <Alert message={alert.message} isSuccess={alert.isSuccess} />
      {favourites.map(({ _id, propertyListing }) => (
        <div key={`${propertyListing._id}${_id}`}>
          <strong>{propertyListing.title}</strong>
          <button type="button" onClick={() => handleDelete(_id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

Favourites.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Favourites;