import React from 'react';
import { render, getAllByTestId } from '@testing-library/react';
import AddProperty from '../Components/AddProperty';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe("AddProperty", () => {
    it("component renders correctly", () => {
        const { asFragment } = render (
        <MemoryRouter><AddProperty /></MemoryRouter> )
        expect(asFragment).toMatchSnapshot();
    });
    it("renders a div with PropertyForm component", () => {
        const { getByTestId } = render (
        <MemoryRouter><AddProperty /></MemoryRouter> )
        const propertyForm = getByTestId("addProperty");
        expect(propertyForm).toBeInTheDocument();
        expect(propertyForm).toHaveClass("add-property");
    });
    it("renders AddProperty component", () => {
        const { getByTestId, getByRole} = render (
        <MemoryRouter><AddProperty /></MemoryRouter> )
    
        const addPropertyComponent = getByTestId("addProperty");
    
        expect(addPropertyComponent).toBeInTheDocument();
        expect(getByRole("button")).toHaveTextContent(/add/i);
        expect(getByTestId("title")).toBeInTheDocument();
        expect(getByTestId("city")).toBeInTheDocument();
        expect(getByTestId("type")).toBeInTheDocument();
        expect(getByTestId("price")).toBeInTheDocument();
        expect(getByTestId("bedrooms")).toBeInTheDocument();
        expect(getByTestId("bathrooms")).toBeInTheDocument();
        expect(getByTestId("email")).toBeInTheDocument();
      });
});
