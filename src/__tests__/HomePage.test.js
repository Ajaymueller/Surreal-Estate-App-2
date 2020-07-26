import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../Components/HomePage';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe("HomePage", () => {
    it("component renders correctly", () => {
    const { asFragment } = render(
    <MemoryRouter><HomePage /></MemoryRouter> )
    expect(asFragment).toMatchSnapshot();
    });
    it("renders a homePage div", () => {
    const { getByTestId } = render(
    <MemoryRouter><HomePage /></MemoryRouter> )
    const homePageDiv = getByTestId("home-page");
    expect(homePageDiv).toBeInTheDocument()
    });
    it("renders a heading wih welcome message", () => {
    const { getByText } = render(
    <MemoryRouter><HomePage /></MemoryRouter> )
    const heading = getByText("Make your dream home a reality")
    expect(heading).toBeInTheDocument();
    });
});