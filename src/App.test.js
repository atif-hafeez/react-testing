import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    
    //expect(screen.getByText('Search')).toBeInTheDocument();

    //expect(screen.getByText('Search:')).toBeInTheDocument();

    //why is this regex failing
    expect(screen.getByText(/Search/)).toBeInTheDocument();
  });
});