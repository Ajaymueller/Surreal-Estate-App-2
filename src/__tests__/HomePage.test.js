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
});