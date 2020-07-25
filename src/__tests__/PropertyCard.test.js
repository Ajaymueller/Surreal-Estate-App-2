import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PropertyCard from '../Components/PropertyCard';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";

const props = {
    title: "randomTitle", 
    type:"Semi-Detached", 
    city: "Manchester", 
    bathrooms: "3", 
    bedrooms: "4", 
    price: "200000", 
    email: "random@email.com",
    _id: "id",
    userID: "12345", 
    onSaveProperty: jest.fn(),
};

describe("PropertyCard", () => {
    it("renders with correct props", () => {
     const { asFragment } = render(
    <MemoryRouter><PropertyCard {...props} /></MemoryRouter> )
    expect(asFragment).toMatchSnapshot();
    });
    it("has all correct fields", () => {
    const { getByTestId } = render(
    <MemoryRouter><PropertyCard {...props} /></MemoryRouter> )
    expect(getByTestId("title-id")).toHaveClass("title");
    expect(getByTestId("type-city")).toHaveClass("type-city");
    expect(getByTestId("bathroom-id")).toHaveClass("bathroom");
    expect(getByTestId("bedroom-id")).toHaveClass("bedroom");
    expect(getByTestId("price-id")).toHaveClass("price");
    expect(getByTestId("email-id")).toHaveClass("email");
    });
    it("displays a button", () => {
    const { getByRole } = render(
    <MemoryRouter><PropertyCard {...props} /></MemoryRouter> );
    const btn = getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent("Save");
    });
    it("calls onSaveProperty when button is clicked", () => {
    const { getByRole } = render(
    <MemoryRouter><PropertyCard {...props} /></MemoryRouter> )    
    const onSaveProperty = props.onSaveProperty;
    fireEvent.click(getByRole("button"));
    expect(onSaveProperty).toHaveBeenCalled();
    });
});

describe("fields", () => {
    it("displays a title", () => {
    const { getByTestId } = render(<PropertyCard {...props} />);
    const title = getByTestId("title-id");
    expect(title.textContent).toBe("randomTitle");
    });
    it("displays a type with a location", () => {
    const { getByTestId } = render(<PropertyCard {...props} />);
    const typeAndCity = getByTestId("type-city");
    expect(typeAndCity.textContent).toBe("Semi-Detached - Manchester");
    });
    it("displays a number of bathrooms", () => {
    const { getByTestId } = render(<PropertyCard {...props} />);
    const bathrooms = getByTestId("bathroom-id");
    expect(bathrooms.textContent).toBe("3");
    });
    it("displays a number of bedrooms", () => {
    const { getByTestId } = render(<PropertyCard {...props} />);
    const bedrooms = getByTestId("bedroom-id");
    expect(bedrooms.textContent).toBe("4");
    });
    it("displays a price", () => {
    const { getByTestId } = render(<PropertyCard {...props} />);
    const price = getByTestId("price-id");
    expect(price.textContent).toBe("200000");
    });
    it("displays an email", () => {
    const { getByTestId } = render(<PropertyCard {...props} />);
    const email = getByTestId("email-id");
    expect(email).toBeInTheDocument();
    })
    it("can send an email", () => {
    const { getByTestId } = render(<PropertyCard {...props} />);
    const email = getByTestId("Email");
    expect(email.href).toBe(`mailto:random@email.com`)
    });
});