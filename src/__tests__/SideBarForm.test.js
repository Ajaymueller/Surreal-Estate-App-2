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
    it("renders a form", () => {
        const { getByTestId } = render (
        <MemoryRouter><SideBarForm {...props}/></MemoryRouter> )
        const form = getByTestId("sideBarForm");
        expect(form).toBeInTheDocument();
    });
    it("renders an input for the form", () => {
        const { getByTestId } = render (
        <MemoryRouter><SideBarForm {...props}/></MemoryRouter> )
        const input = getByTestId("input-id");
        expect(input).toBeInTheDocument();
    });
    it("renders a search button", () => {
        const { getByRole } = render (
        <MemoryRouter><SideBarForm {...props}/></MemoryRouter> )
        const btn = getByRole("button");
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveTextContent("Search");
    });
    it("changes the state when input is changed", () => {
        const { getByTestId } = render (
        <MemoryRouter><SideBarForm {...props}/></MemoryRouter> )
        const handleChange = props.handleChange;
        const input = getByTestId("input-id");
        fireEvent.change(input, { target: { value: "randomQuery"}});
        expect(handleChange).toHaveBeenCalled();
    });
    it("calls handleSearch on submission of form", () => {
        const { getByTestId } = render (
        <MemoryRouter><SideBarForm {...props}/></MemoryRouter> )
        const handleSearch = props.handleSearch;
        const form = getByTestId("sideBarForm"); 
        fireEvent.submit(form);
        expect(handleSearch).toHaveBeenCalled()
    });
});