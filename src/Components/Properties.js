import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./SideBar";
import { getProperties, filterProperties, saveFavourite } from "../requests";
import "../styles/Properties.css";

const Properties = ({ userID }) => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });
  useEffect(() => {
    getProperties(setProperties, setAlert);
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    filterProperties(search, setProperties, setAlert);
  }, [search]);

  const handleSaveProperty = (propertyId) =>
    saveFavourite(propertyId, userID, setAlert);

  return (
    <div className="properties">
      <Sidebar />
      <div className="Properties">
      {properties.map((property) => (
        <div className="Properties">
        <PropertyCard
          key={property._id}
          {...property}
          userID={userID}
          onSaveProperty={handleSaveProperty}
        /> </div>
      ))}
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
    </div>
  );
};

Properties.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Properties;