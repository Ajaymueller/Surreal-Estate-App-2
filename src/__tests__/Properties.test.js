import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Properties from '../Components/Properties';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

const props = { userId: 12345 }

describe("properties", () => {
    it("component renders with correct props", () => {
        const { asFragement } = render( 
        <MemoryRouter><Properties {...props} /></MemoryRouter>)
        expect(asFragement).toMatchSnapshot();
    });
    it("renders properties div", () => {
        const { getByTestId } = render( 
        <MemoryRouter><Properties {...props} /></MemoryRouter>)
        const propertiesDiv = getByTestId("Properties");
        expect(propertiesDiv).toBeInTheDocument();
    });
});