import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SideBarForm from '../Components/SideBarForm';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";

const props = {
    handleChange: jest.fn(), 
    handleSearch: jest.fn(), 
    query: "random", 
};

describe("SideBarForm", () => {
    it("component renders with correct props", () => {
        const { asFragment } = render (
        <MemoryRouter><SideBarForm {...props}/></MemoryRouter> )
        expect(asFragment).toMatchSnapshot();
    });
    xit("renders a form", () => {
        const { getByTestId } = render (
        <MemoryRouter><SideBarForm {...props}/></MemoryRouter> )
        const form = getByTestId("sideBarForm");
        expect(form).toBeInTheDocument();
    });
});