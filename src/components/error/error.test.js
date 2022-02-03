import { render, screen } from '@testing-library/react';
import Error from './Error';

test('renders Error', () => {
    render(<Error/>);
    const erorMsg = screen.getByText(/something went wrong/i);
    expect(erorMsg).toBeInTheDocument()
})