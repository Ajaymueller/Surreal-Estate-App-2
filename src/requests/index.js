
import axios from "axios";

const api = "http://localhost:4000/api/v1/";

const getProperties = (setProperties, setAlert, endpoint = "PropertyListing") =>
  axios
    .get(`${api}${endpoint}`)
    .then(({ data, propertyListing }) => setProperties(data || propertyListing))
    .catch(() => setAlert("Server error. Please try again later."));

const filterProperties = (search, setProperties, setAlert) =>
  axios
    .get(`${api}PropertyListing${search}`)
    .then(({ data }) => {
      if (data.length === 0) {
        setAlert({ message: "No properties found", isSuccess: true });
        setProperties(data);
      } else {
        setAlert({ message: "", isSuccess: false });
        setProperties(data);
      }
    })
    .catch(() =>
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      })
    );

const saveProperty = (fields, setAlert) =>
  axios
    .post(`${api}PropertyListing`, fields)
    .then(() =>
      setAlert({
        message: "Property Added",
        isSuccess: true,
      })
    )
    .catch(() =>
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      })
    );

const saveFavourite = (propertyId, userID, setAlert) =>
  axios
    .post(`${api}/api/v1/Favourite`, {
      propertyListing: propertyId,
      fbUserId: userID,
    })
    .then(() => setAlert({ message: "Property saved", isSuccess: true }))
    .then(() =>
      setTimeout(() => setAlert({ message: "", isSuccess: false }), 3000)
    )
    .catch(() =>
      setAlert({
        message: "Not possible to save, try again later",
        isSuccess: false,
      })
    )
    .then(() =>
      setTimeout(() => setAlert({ message: "", isSuccess: false }), 3000)
    );

const deleteFavourite = (favouriteId, setAlert) =>
  axios
    .delete(`${api}Favourite/${favouriteId}`)
    .then(() => setAlert({ message: "Property deleted", isSuccess: true }))
    .then(() =>
      setTimeout(() => setAlert({ message: "", isSuccess: true }), 3000)
    )
    .catch(() =>
      setAlert({
        message: "Not possible to delete, try again later",
        isSuccess: false,
      })
    )
    .then(() =>
      setTimeout(() => setAlert({ message: "", isSuccess: false }), 3000)
    );

export {
  getProperties,
  saveProperty,
  filterProperties,
  saveFavourite,
  deleteFavourite,
};