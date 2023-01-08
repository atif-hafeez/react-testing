import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();
        
    expect(screen.queryByText(/Searches for Javascript/)).toBeNull();
  });
});

describe('App', () => {
  it('displays Users Sign in status', async() => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    screen.debug();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

    screen.debug
  })
})