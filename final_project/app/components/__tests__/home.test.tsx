import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../../(home)/page"; // Adjust the import path to where your HomePage component is located
import AboutPage from "../../about/page"; // Adjust the import path to where your HomePage component is located
import HVO from "../../hvo/page"; // Adjust the import path to where your HomePage component is located
import Footer from "../footer"; // Adjust the import path to where your HomePage component is located


describe("HomePage", () => {
  it("renders the expected headline", () => {
    render(<HomePage />);
    const headingElement = screen.getByText(/Leccy Cars/i); // Adjust this text to match what you expect to find
    expect(headingElement).toBeInTheDocument();
  });

  it("contains specific keyword", () => {
    render(<HomePage />);
    const specificText = screen.getByText(/informing/i); // Replace "Unique Keyword" with the text you are testing for
    expect(specificText).toBeInTheDocument();
  });

  describe("AboutPage Tests", () => {
    it("renders the about page and checks for content", () => {
      render(<AboutPage />);
      const aboutText = screen.getByText(/B00137935/i);
      expect(aboutText).toBeInTheDocument();
    });

    it("checks for contact information on about page", () => {
      render(<AboutPage />);
      const contactInfo = screen.getByText(/jaded/i);
      expect(contactInfo).toBeInTheDocument();
    });
  });

  describe("HVOPage Tests", () => {
    it("Find some text on the footer", () => {
      render(<Footer />);
      const aboutText = screen.getByText(/Social Media/i);
      expect(aboutText).toBeInTheDocument();
    });

    it("Contains specific word", () => {
      render(<Footer />);
      const contactInfo = screen.getByText(
        /B00137935@outlook.com/i
      );
      expect(contactInfo).toBeInTheDocument();
    });
  });

  
  describe("HVOPage Tests", () => {
    it("Find some text on the footer", () => {
      render(<Footer />);
      const aboutText = screen.getByText(/Social Media/i);
      expect(aboutText).toBeInTheDocument();
    });

    it("Contains specific word", () => {
      render(<Footer />);
      const contactInfo = screen.getByText(
        /B00137935@outlook.com/i
      );
      expect(contactInfo).toBeInTheDocument();
    });
  });
});
