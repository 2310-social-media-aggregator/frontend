import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Main from "./Main";


jest.mock('../CreatorCard/CreatorCard', () => () => <div data-testid="creator-card"></div>);

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

describe('Main component', () => {
  it('renders creator cards when displayedCreators prop is provided', () => {
    const displayedCreators = {
      data: {
        id: null,
        type: 'creator_index',
        attributes: {
          creators: [
            { name: 'Mock Aztecross', id: 1 },
            { name: 'Mock ZFG', id: 2 },
            { name: 'Mock Northernlion', id: 3 },
          ],
        },
      },
    };

    const { getAllByTestId } = render(<Main displayedCreators={displayedCreators.data.attributes.creators} />);
    const creatorCards = getAllByTestId('creator-card');
    
    expect(creatorCards.length).toBe(3); 
  });
	it('does not render any creator cards when displayedCreators prop is null', () => {
		const { queryByTestId } = render(<Main displayedCreators={null} />);
		const creatorCards = queryByTestId('creator-card');
		expect(creatorCards).toBeNull();
	});
});