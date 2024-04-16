import React from 'react';
import { render } from '@testing-library/react';
import CreatorCard from './CreatorCard';

describe('CreatorCard component', () => {
  const testData = [
    { name: 'Mock Aztecross', id: 1, key: 1 },
    { name: 'Mock ZFG', id: 2, key: 2 },
    { name: 'Mock Northernlion', id: 3, key: 3 },
  ];
  testData.forEach(({ name, id, key }) => {
    it(`renders the name "${name}" of the creator`, () => {
      const { getByText } = render(<CreatorCard name={name} id={id} key={key} />);
      const nameElement = getByText(name);
      expect(nameElement).toBeInTheDocument();
    });

    it(`renders the card with the correct class name for "${name}"`, () => {
      const { container } = render(<CreatorCard name={name} id={id} key={key} />);
      const cardElement = container.querySelector('.card');
      expect(cardElement).toBeInTheDocument();
    });
  });
});