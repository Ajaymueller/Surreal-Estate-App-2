import React from "react";
import PropTypes from "prop-types";
import '../styles/PropertyCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faPoundSign,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  _id,
  title,
  type,
  city,
  bathrooms,
  bedrooms,
  price,
  email,
  userID,
  onSaveProperty,
}) => {
  return (
    <div className="PropertyCard">
      <logo><FontAwesomeIcon icon={faHome} /></logo>
      <header>
        <h2 data-testid="title-id" className="title">
          {title}
          </h2>
        <h3 data-testid="type-city" className="type-city">
          {`${type} - ${city}`}
          </h3>
        {userID && (
          <button type="button" onClick={() => onSaveProperty(_id)}>
            Save
          </button>
        )}
      </header>
      <section>
        <div className="bathroom" data-testid="bathroom-id">
          <FontAwesomeIcon icon={faBath} /> 
          {`${bathrooms}`}</div>
        <div className="bedroom" data-testid="bedroom-id">
          <FontAwesomeIcon icon={faBed} /> 
          {`${bedrooms}`}</div>
        <div className="price" data-testid="price-id">
          <FontAwesomeIcon icon={faPoundSign} /> 
          {` ${price}`}</div>
      </section>
      <footer className="email" data-testid="email-id">
        <FontAwesomeIcon icon={faEnvelope} /> 
        <a href={`mailto:${email}`}>Email for details</a>
      </footer>
    </div>
  );
};

PropertyCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
};

export default PropertyCard;