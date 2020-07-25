import React from 'react';
import { render } from '@testing-library/react';
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
});