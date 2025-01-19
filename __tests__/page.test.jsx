import { render, screen } from '@testing-library/react';

import Home from '../src/app/_components/index.js';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toBeInTheDocument();
  });
});
