import React from "react";
import { render, cleanup } from "@testing-library/react";
import OrderRepo from "./OrderRepo";

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<OrderRepo />);
    expect(asFragment()).toMatchSnapshot();
});