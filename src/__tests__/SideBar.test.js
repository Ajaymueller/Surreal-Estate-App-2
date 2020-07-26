import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SideBar from '../Components/SideBar';
import { MemoryRouter } from 'react-router-dom';
import {withRouter} from 'react-router'
import '@testing-library/jest-dom/extend-expect';

describe("SideBar", () => {
    it("render correctly", () => {
    const { asFragment } = render(
    <MemoryRouter><SideBar /></MemoryRouter>)
    expect(asFragment).toMatchSnapshot(); 
    });
    it("sidebar links have option to filter by and sort by", () => {
    const { getByText } = render(
    <MemoryRouter><SideBar /></MemoryRouter>)
    const filterBy= getByText("Filter By")
    const sortBy = getByText("Sort By")
    expect(filterBy).toBeInTheDocument();
    expect(sortBy).toBeInTheDocument();
    });
    it("has li that displays 4 different city options", () => {
    const { getAllByTestId } = render(
    <MemoryRouter><SideBar /></MemoryRouter>)
    const city = getAllByTestId("city-option")
    expect(city).toHaveLength(4);
    });
    it("can sort options by ascending or descending", () => {
    const { getByText } = render(
    <MemoryRouter><SideBar /></MemoryRouter>)
    const ascending = getByText("Ascending");
    const descending = getByText("Descending");
    expect(ascending).toBeInTheDocument();
    expect(descending).toBeInTheDocument();
    })
    it("contains 6 link elements", () => {
    const { getAllByRole } = render(
    <MemoryRouter><SideBar /></MemoryRouter>)
    const links = getAllByRole("link");
    expect(links).toHaveLength(6);
    });
});

