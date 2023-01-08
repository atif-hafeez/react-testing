import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

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

describe('App', () => {
  it('updates the textbox', async () => {
    render(<App />);

    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull()

    fireEvent.change(screen.getByRole('textbox'), {
      target: {value: 'JavaScript'},
    });

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument()
  })
})