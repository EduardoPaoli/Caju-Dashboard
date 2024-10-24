import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonSmall } from ".";
import { IconButton } from "./IconButton";

describe("Button", () => {
  it("Render without crashing", () => {
    const { container } = render(<Button>Send</Button>);
    expect(container).toBeInTheDocument();
  });

  it("Should applies className prop", () => {
    render(<Button className="custom-class">click me</Button>);

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass("custom-class");
  });

  it("Should calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>click me</Button>);

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('IconButton', () => {
  it('renders without crashing', () => {
    render(<IconButton>enviar</IconButton>);
    
    expect(screen.getByText('enviar')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <IconButton>
        <svg data-testid="icon" />
      </IconButton>
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('handles button click', () => {
    const handleClick = jest.fn();
    render(<IconButton onClick={handleClick}>enviar</IconButton>);
    
    fireEvent.click(screen.getByText('enviar'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('ButtonSmall', () => {
  it('renders with custom background and text color', () => {
    render(<ButtonSmall bgcolor="blue" color="white">Small</ButtonSmall>);
    const button = screen.getByText('Small');
    
    expect(button).toHaveStyle('background-color: blue');
    expect(button).toHaveStyle('color: white');
  });
});
