import React from "react";
import { render, cleanup } from "@testing-library/react";
import Button from "./Button";

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
});