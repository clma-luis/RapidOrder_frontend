import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have the word conectar in the screen", async () => {
    render(<Home />);
    const myElement = screen.getByText("Hola mundo");

    expect(myElement).toBeInTheDocument();
  });
});
