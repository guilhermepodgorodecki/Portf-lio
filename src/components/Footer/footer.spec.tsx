import { render, screen } from "@testing-library/react";
import { Footer } from "./index";
import { describe, it } from "vitest";

describe("Footer component", () => {
    it("should render sucessfully", () => {
        render(<Footer/>)
    })
    it("should render the footer text: Developed with ❤️ by Pablito, 2023", () => {
        render(<Footer />);
        screen.getByText("Developed with ❤️ by Pablito, 2023");
    });
})


