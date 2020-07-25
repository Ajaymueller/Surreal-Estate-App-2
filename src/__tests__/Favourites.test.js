import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Favourites from '../Components/Favourites';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";

const props = {
    userID: "userID",
};

describe("Favourites", () => {
    it("component renders with correct props", () => {
        const { asFragment } = render (
        <MemoryRouter><Favourites {...props}/></MemoryRouter> )
        expect(asFragment).toMatchSnapshot();
    });
});