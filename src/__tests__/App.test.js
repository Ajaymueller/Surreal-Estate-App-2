import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../Components/App';

import AddProperty from '../Components/AddProperty'; 
import { MemoryRouter } from 'react-router-dom';
import { Route, Router } from 'react-router-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../Components/HomePage';
Enzyme.configure({ adapter: new Adapter() });
import { createMemoryHistory } from 'history'
import Properties from '../Components/Properties';

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
    it("renders HomePage component", () => {
    const { getByText, getByTestId } = render(
    <MemoryRouter><App /></MemoryRouter> )
    fireEvent.click(getByText("View Properties"));
    expect(getByTestId("HomePage")).toBeInTheDocument();
    })
    it("renders Properties component", () => { //doesn't pass!!
    const { getByText, getByTestId } = render(
    <MemoryRouter><App /></MemoryRouter> )
    fireEvent.click(getByText("View Properties"));
    expect(getByTestId("Properties")).toBeInTheDocument();
    });
    it("renders AddProperty component", () => { //doesn't pass!!
    const { getByText, getByTestId } = render(
    <MemoryRouter><App /></MemoryRouter> )
    fireEvent.click(getByText("Add Property"));
    expect(getByTestId("addProperty")).toBeInTheDocument();
    });
    xit("should contain 3 routes", () => { // doesn't pass!!
    const { getAllByRole } = render(
    <MemoryRouter><App /></MemoryRouter> )
    const routes = getAllByRole("href");
    expect(routes).toHaveLength(4);
    });
});

const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return { 
    ...render (
    <Router history={history}>
        {component}
    </Router>
    )
  }
}

describe("routes using memory router", () => {
    xit("should load HomePage component for / route", () => {
    const component = mount ( <MemoryRouter initialentries="{['/']}">
    <App/> </MemoryRouter>)
    expect(component.find(HomePage)).toHaveLength(1);
    })
    xit("should show properties component for /properties route", () => { // doesn't pass!!
    const component = mount ( <MemoryRouter initialentries="{['/properties']}">
    <App/> </MemoryRouter> )
    expect(component.find(Properties)).toHaveLength(1);
    });
    xit("should show AddProperty component for /add-property", () => { // doesn't pass!!
    const component = mount ( <MemoryRouter initialentries="{['/add-property']}">
    <App/> </MemoryRouter> )
    expect(component.find(AddProperty)).toHaveLength(1);
    });
    xit("should render properties component", () => { // doesn't pass!! 
    const { container, getByTestId } = 
    renderWithRouter(<App />) 
    const properties = getByTestId("Properties")
    const app = getAllByTestId("App");
    expect(app).toContainElement(properties);
    });
});