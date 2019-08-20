import React from "react";
import { render, cleanup } from "@testing-library/react";
import CommitCard from "./CommitCard";

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<CommitCard />);
    expect(asFragment()).toMatchSnapshot();
});