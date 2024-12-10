import { render, screen } from '@testing-library/react';
import Page from '@/app/dashboard/page';
import * as React from 'react';

describe('Dashboard Page', () => {

    it('should display the links for Study, Editor and Discover', () => {
        render(<Page/>)
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThan(2);
    })
    
})