import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavBar from '../Components/NavBar';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

const props = {
    onLogin: jest.fn(), 
    userID: 10, 
    onLogout: jest.fn(),
};

describe("NavBar", () => {
    it("component renders with correct props", () => {
    const { asFragment } = render( 
    <MemoryRouter><NavBar {...props} /></MemoryRouter>)
    expect(asFragment).toMatchSnapshot();
    });
    it("displays a logo", () => {
    const { getByAltText } = render( 
    <MemoryRouter><NavBar {...props} /></MemoryRouter>)
    const logo = getByAltText("logo");
    expect(logo).toBeInTheDocument();
    })
    it("displays a list with link to properties, add properties page and saved properties page", () => {
    const { getByText } = render( 
    <MemoryRouter><NavBar {...props} /></MemoryRouter>)
    const viewProperties = getByText("View Properties");
    const addProperty = getByText("Add Property");
    const savedProperties = getByText("Saved Properties");
    expect(viewProperties).toBeInTheDocument();
    expect(addProperty).toBeInTheDocument();
    expect(savedProperties).toBeInTheDocument();
    });
    it("displays a sign out button if there is a userID", () => {
    const { getByTestId } = render( 
    <MemoryRouter><NavBar {...props} /></MemoryRouter>)
    const button = getByTestId("sign-out");
    expect(button).toBeInTheDocument();
    });
});

describe("with router", () => {
    xit("should navigate to view properties page with /properties", () => {
        const { getByTestId, getByText } = 
        render( 
        <MemoryRouter><NavBar {...props} /></MemoryRouter>)
        const viewProperties = getByTestId("view-properties-id")
        fireEvent.click(getByText("View Properties"))
        expect(viewProperties).toBeInTheDocument();
        expect(viewProperties).toHaveAttribute("href", "/properties");
    });
    xit("should navigate to Add properties page with /add-property", () => {
        const { getByTestId, getByText } = 
        render( 
        <MemoryRouter><NavBar {...props} /></MemoryRouter>)
        const addProperty = getByTestId("add-property-id")
        fireEvent.click(getByText("Add Property"))
        expect(addProperty).toBeInTheDocument();
        expect(addProperty).toHaveAttribute("href", "/add-property");
    });
})