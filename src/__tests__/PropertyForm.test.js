import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PropertyForm from '../Components/PropertyForm';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

const props = {
    handleAddProperty: jest.fn(),
    handleFieldChange: jest.fn(),
    title: "randomTitle", 
    city: "Liverpool", 
    type: "Semi-Detached",
    bedrooms: 3,
    bathrooms: 3, 
    price: 250000,
    email: "random@gmail.com",
};

describe("PropertyForm", () => {
    it("component renders with correct props", () => {
        const { asFragment } = render 
        (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        expect(asFragment).toMatchSnapshot();
    });
    it("renders a form", () => {
        const { getByTestId } = 
        render (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const form = getByTestId("property-form");
        expect(form).toBeInTheDocument();
    });
    it("form should have an add button", () => {
        const { getByRole } = 
        render (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const btn = getByRole("button");
        expect(btn).toHaveTextContent("Add");
    })
    it("renders form fields correctly", () => {
        const { getByTestId, getByRole } = 
        render (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        expect(getByTestId("title")).toBeInTheDocument()
        expect(getByTestId("city")).toBeInTheDocument()
        expect(getByTestId("type")).toBeInTheDocument()
        expect(getByTestId("bathrooms")).toBeInTheDocument()
        expect(getByTestId("bedrooms")).toBeInTheDocument()
        expect(getByTestId("price")).toBeInTheDocument()
        expect(getByTestId("email")).toBeInTheDocument()
        expect(getByRole('button')).toBeInTheDocument()
    })
    it("should update the state when fields changed", () => {
        const { getByTestId } = render 
        (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const handleFieldChange = props.handleFieldChange;
        const title = getByTestId("title");
        const city = getByTestId("city");
        const type = getByTestId("type");
        const bathrooms = getByTestId("bathrooms");
        const bedrooms = getByTestId("bedrooms");
        const price = getByTestId("price");
        const email = getByTestId("email");
        fireEvent.change(title, { target: { value: "changedValue" } });
        fireEvent.change(city, { target: { value: "changedValue" } });
        fireEvent.change(type, { target: { value: "changedValue" } });
        fireEvent.change(bathrooms, { target: { value: "changedValue" } });
        fireEvent.change(bedrooms, { target: { value: "changedValue" } });
        fireEvent.change(price, { target: { value: "changedValue" } });
        fireEvent.change(email, { target: { value: "changedValue" } });
        expect(handleFieldChange).toHaveBeenCalled();
    });
    it("should call handleAddProperty on form submission", () => {
        const { getByTestId } = render 
        (<MemoryRouter><PropertyForm {...props} /></MemoryRouter> )
        const handleAddProperty = props.handleAddProperty;
        fireEvent.submit(getByTestId("property-form"));
        expect(handleAddProperty).toHaveBeenCalled();
    });
});