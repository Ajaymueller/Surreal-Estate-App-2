import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../Components/App';
//import Properties from '../components/Properties';
//import AddProperty from '../components/AddProperty'; 
import { MemoryRouter } from 'react-router-dom';
//import { Route } from 'react-router-dom';
//import Enzyme, { shallow, mount } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
//import { faItalic } from '@fortawesome/free-solid-svg-icons';
//Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
    xit("renders correctly", () => {
    const { asFragment } = render(
    <MemoryRouter><App /></MemoryRouter> )
    expect(asFragment).toMatchSnapshot();
    });
});