import React from 'react';
import '../styles/AddProperty.css';

const PropertyForm = ({ handleAddProperty, handleFieldChange, title,
    city,
    type,
    bedrooms,
    bathrooms,
    price,
    email, } ) => {
    return (
        <div>
        <form onSubmit={handleAddProperty} 
        data-testid="property-form">
    <div className="add-property-field">
      <label htmlFor="title">
        Title
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Property tagline"
          value={title}
          onChange={handleFieldChange}
          data-testid="title"

        />
      </label>
    </div>
    <div className="add-property-field">
      <label htmlFor="city">
        City
        <select
          id="city"
          name="city"
          value={city}
          onChange={handleFieldChange}
          data-testid="city"
        >
          <option value="Manchester">Manchester</option>
          <option value="Leeds">Leeds</option>
          <option value="Sheffield">Sheffield</option>
          <option value="Liverpool">Liverpool</option>
        </select>
      </label>
    </div>
    <div className="add-property-field">
      <label htmlFor="type">
        Type
        <select
          id="type"
          name="type"
          value={type}
          onChange={handleFieldChange}
          data-testid="type"
        >
          <option value="Flat">Flat</option>
          <option value="Detached">Detached</option>
          <option value="Semi-Detatched">Semi-Detatched</option>
          <option value="Terraced">Terraced</option>
          <option value="End of Terrace">End of Terrace</option>
          <option value="Cottage">Cottage</option>
          <option value="Bungalow">Bungalow</option>
        </select>
      </label>
    </div>
    <div className="add-property-field">
      <label htmlFor="price">
        Price
        <input
          id="price"
          name="price"
          type="number"
          value={price}
          onChange={handleFieldChange}
          data-testid="price"
        />
      </label>
    </div>
    <div className="add-property-field">
      <label htmlFor="bedrooms">
        Bedrooms
        <input
          id="bedrooms"
          name="bedrooms"
          type="number"
          value={bedrooms}
          onChange={handleFieldChange}
          data-testid="bedrooms"
        />
      </label>
    </div>
    <div className="add-property-field">
      <label htmlFor="bathrooms">
        Bathrooms
        <input
          id="bathrooms"
          name="bathrooms"
          type="number"
          value={bathrooms}
          onChange={handleFieldChange}
          data-testid="bathrooms"
        />
      </label>
    </div>
    <div className="add-property-field">
      <label htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          placeholder="Contact email"
          type="email"
          value={email}
          onChange={handleFieldChange}
          data-testid="email"
        />
      </label>
    </div>
    <button type="submit">Add</button>
  </form>
    </div>
    )
}

export default PropertyForm;