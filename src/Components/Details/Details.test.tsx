import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Details from './Details';

jest.mock('../../apiCalls', () => ({
  getCreatorInfo: jest.fn(() => Promise.resolve({ data: { attributes: { youtube_videos: [], twitch_videos: [] } } })),
}));

describe('Details component', () => {
  const displayedCreators = [
    { id: 1, name: 'Creator 1' },
    { id: 2, name: 'Creator 2' },
  ];

  it('renders the details page', async () => {
    // const { getByText } = render(
    //   <MemoryRouter initialEntries={['/details/1']}>
    //     <Routes>
    //       <Route path="/details/:id" element={<Details displayedCreators={displayedCreators} />} />
    //     </Routes>
    //   </MemoryRouter>
    // );

    // expect(getByText("Creator 1's Details")).toBeInTheDocument();
  });

  it('renders Youtube videos section', async () => {
    // const { getByText } = render(
    //   <MemoryRouter initialEntries={['/details/1']}>
    //     <Routes>
    //       <Route path="/details/:id" element={<Details displayedCreators={displayedCreators} />} />
    //     </Routes>
    //   </MemoryRouter>
    // );

    // expect(getByText('Youtube')).toBeInTheDocument();
  });

  it('renders Twitch videos section', async () => {
    // const { getByText } = render(
    //   <MemoryRouter initialEntries={['/details/1']}>
    //     <Routes>
    //       <Route path="/details/:id" element={<Details displayedCreators={displayedCreators} />} />
    //     </Routes>
    //   </MemoryRouter>
    // );

    // expect(getByText('Twitch')).toBeInTheDocument();
  });
});
