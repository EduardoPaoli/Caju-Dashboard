import React from 'react';
import { render, screen } from '@testing-library/react';
import Collumns from './';
import { Status } from '~/Interface/Admissions';

jest.mock('../RegistrationCard', () => {
  return jest.fn(() => <div>Mocked</div>);
});

describe('Collumns', () => {
  const mock = [
    { id: '1', status: Status.REVIEW },
    { id: '2', status: Status.APPROVED },
    { id: '3', status: Status.REPROVED },
    { id: '4', status: Status.REVIEW },
  ];

  it('renders the correct titles for each column', () => {
    render(<Collumns registrations={mock} />);

    expect(screen.getByText('Revisar')).toBeInTheDocument();
    expect(screen.getByText('Aprovado')).toBeInTheDocument();
    expect(screen.getByText('Reprovado')).toBeInTheDocument();
  });

  it('does not render any cards if registrations are empty', () => {
    render(<Collumns registrations={[]} />);

    
    expect(screen.getByText('Revisar')).toBeInTheDocument();
    expect(screen.getByText('Aprovado')).toBeInTheDocument();
    expect(screen.getByText('Reprovado')).toBeInTheDocument();
    expect(screen.queryByText('Mocked')).not.toBeInTheDocument();
  });
});
