import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../Components/App';
import Properties from '../Components/Properties';
import AddProperty from '../Components/AddProperty'; 
import { MemoryRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../Components/HomePage';
//import { faItalic } from '@fortawesome/free-solid-svg-icons';
Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-facebook-login", () =>
  jest.fn(() => <div>Facebook login</div>)
);

describe("App", () => {
    it("renders correctly", () => {
    const { asFragment } = render(
    <MemoryRouter><App /></MemoryRouter> )
    expect(asFragment).toMatchSnapshot();
    });
});

describe("With React router", () => {
    xit("renders Properties and AddProperty component", () => {
    const { getByText, getByTestId } = render(
    <MemoryRouter><App /></MemoryRouter> )
    fireEvent.click(getByText("View Properties"));
    fireEvent.click(getByText("Add Property"));
    expect(getByTestId("properties")).toBeInTheDocument();
    expect(getByTestId("addProperty")).toBeInTheDocument();
    });
});

describe("routes using memory router", () => {
    xit("should load HomePage component for / route", () => {
    const component = mount ( <MemoryRouter initialentries="{['/']}">
    <App/> </MemoryRouter>)
    expect(component.find(HomePage)).toHaveLength(1);
    })
    xit("should show properties component for /properties route", () => {
    const component = mount ( <MemoryRouter initialentries="{['/properties']}">
    <App/> </MemoryRouter> )
    expect(component.find(Properties)).toHaveLength(1);
    });
    xit("should show AddProperty component for /add-property", () => {
    const component = mount ( <MemoryRouter initialentries="{['/add-property']}">
    <App/> </MemoryRouter> )
    expect(component.find(AddProperty)).toHaveLength(1);
    })
})