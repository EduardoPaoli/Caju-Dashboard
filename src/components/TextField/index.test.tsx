import { render, screen } from "@testing-library/react";
import TextField from ".";

describe('TextField', () => {
    it('renders the input with correct properties', () => {
      render(<TextField id="test-input" type="text" placeholder="Digite um CPF" />);
      
      const input = screen.getByPlaceholderText('Digite um CPF');
  
      expect(input).toHaveAttribute('type', 'text');
      expect(input).toHaveAttribute('placeholder', 'Digite um CPF');
    });
  
    it('displays error message when error prop is provided', () => {
      render(<TextField label="Nome" error="Campo obrigatório" />);
      expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
    });
  
    it('does not display error message when no error prop is provided', () => {
      render(<TextField label="Nome" />);
      
      expect(screen.queryByText('This field is required')).not.toBeInTheDocument();
    });
  });