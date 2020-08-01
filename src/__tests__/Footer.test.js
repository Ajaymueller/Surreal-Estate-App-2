import React from 'react';
import { render, fireEvent, getAllByTestId } from '@testing-library/react';
import Footer from '../Components/Footer';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";

describe("footer", () => {
    it("component renders correctly", () => {
    const { asFragment } = render (
    <MemoryRouter><Footer /></MemoryRouter> )
    expect(asFragment).toMatchSnapshot();
    });
    it("renders li with name and year as content", () => {
    const { getByTestId } = render (
    <MemoryRouter><Footer /></MemoryRouter> )
    const li = getByTestId("footer-id");
    expect(li).toBeInTheDocument();
    expect(li.innerHTML).toBe("Aidan Mueller, 2020");
    });
});