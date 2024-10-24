import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '.';
import { useSearch } from '~/hooks/useSearch';
import { useQueryClient } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

jest.mock('~/hooks/useSearch', () => ({
  useSearch: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useQueryClient: jest.fn(),
}));

describe('SearchBar', () => {
  const setSearchValueMock = jest.fn();
  const refetchQueriesMock = jest.fn();

  beforeEach(() => {
    (useSearch as jest.Mock).mockReturnValue({ setSearchValue: setSearchValueMock });
    (useQueryClient as jest.Mock).mockReturnValue({ refetchQueries: refetchQueriesMock });
  });

  it('renders the search bar correctly', () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText('Digite um CPF válido');
    expect(input).toBeInTheDocument();

    const newAdmissionButton = screen.getByText('Nova Admissão');
    expect(newAdmissionButton).toBeInTheDocument();

    const refreshButton = screen.getByLabelText('refetch');
    expect(refreshButton).toBeInTheDocument();
  });

  it('updates the search value on input change', () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText('Digite um CPF válido');
    
    fireEvent.change(input, { target: { value: '123.456.789-00' } });
    expect(setSearchValueMock).toHaveBeenCalledWith('123.456.789-00');
  });

  it('calls refetchQueries when refresh button is clicked', () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );

    const refreshButton = screen.getByLabelText('refetch');
    fireEvent.click(refreshButton);
    expect(setSearchValueMock).toHaveBeenCalledWith('');
    expect(refetchQueriesMock).toHaveBeenCalledWith({ queryKey: ["admissions"] });
  });

  it('navigates to new admission page when button is clicked', () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );

    const newAdmissionButton = screen.getByText('Nova Admissão');
    fireEvent.click(newAdmissionButton);
  });
});
