import { render, screen } from '@testing-library/react';
import Campaign from './Campaign';
const campaign = {
    name: 'John',
    id: 4
}

describe('campaign component', () => {
    test('has name', () => {
        render(<Campaign campaign={campaign} />);
        const campaignName = screen.getByText(/John/i);
        expect(campaignName).toBeInTheDocument()
    })
    test('has id', () => {
        render(<Campaign campaign={campaign} />);
        const campaignName = screen.getByText(/4/i);
        expect(campaignName).toBeInTheDocument()
    })

})
