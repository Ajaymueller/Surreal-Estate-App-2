import React, { useState } from "react";
import Alert from "./Alert";
import PropertyForm from "./PropertyForm";
import { saveProperty } from "../requests";

import "../styles/AddProperty.css";

const initialState = {
  fields: {
    title: "",
    city: "Manchester",
    type: "",
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
    email: "",
  },
  alert: {
    message: "",
    isSuccess: false,
  },
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });

    return saveProperty(fields, setAlert);
  };

  const handleFieldChange = (event) => {
    const changedField = event.target.name;
    const newValue = event.target.value;

    setFields({ ...fields, [changedField]: newValue });
  };

  return (
    <div className="add-property" data-testid="addProperty">
       <PropertyForm 
        handleAddProperty={handleAddProperty}
        handleFieldChange={handleFieldChange}
        title={fields.title}
        city={fields.city}
        type={fields.type}
        bedrooms={fields.bedrooms}
        bathrooms={fields.bathrooms}
        price={fields.price}
        email={fields.email}
        />
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
};

export default AddProperty;