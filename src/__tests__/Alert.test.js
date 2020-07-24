import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../Components/Alert';
import { MemoryRouter } from 'react-router-dom';

const props = {
    message: "random message", 
    success: true, 
}

describe("alert", () => {
    it("component renders correctly", () => {
    const { asFragment } = render (
    <MemoryRouter><Alert { ...props } /></MemoryRouter> )
    expect(asFragment).toMatchSnapshot();
    });
    it("displays a success message", () => {
    const { getByText } = render (
    <MemoryRouter><Alert message="Success" /></MemoryRouter> )
    expect(getByText(/Success/).textContent).toBe("Success");
    });
    it("renders an error message", () => {
    const { getByText } = render (
    <MemoryRouter><Alert message="Error" /></MemoryRouter> )
    expect(getByText(/Error/).textContent).toBe("Error");
    });
});