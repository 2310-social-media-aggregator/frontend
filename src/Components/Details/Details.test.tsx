import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Details from './Details';

interface Creator {
  id: number; 
  name: string;
}

const mockCreatorInfo = {
  id: 9, 
  type: 'creator_aggregation',
  attributes: {
    name: 'Joseph Anderson',
    youtube_videos: [
      {
        id: '-wZeUJDkAO0',
        image: 'https://i.ytimg.com/vi/-wZeUJDkAO0/hqdefault.jpg',
        published_at: null,
        title: 'Lies of P Critique',
      },
      {
        id: 'nEyjdc-DIb8',
        image: 'https://i.ytimg.com/vi/nEyjdc-DIb8/hqdefault.jpg',
        published_at: null,
        title: 'Elden Ring - A Shattered Masterpiece',
      },
      {
        id: 'htYR2GdA7OE',
        image: 'https://i.ytimg.com/vi/htYR2GdA7OE/hqdefault.jpg',
        published_at: null,
        title: 'The Witcher 2 Commentary - A Grand Experiment',
      },
      {
        id: 'NtrAx-rVgco',
        image: 'https://i.ytimg.com/vi/NtrAx-rVgco/hqdefault.jpg',
        published_at: null,
        title: 'The Witcher Critique - The Beginning of a Monster',
      },
      {
        id: 'zwp23SG9w3Q',
        image: 'https://i.ytimg.com/vi/zwp23SG9w3Q/hqdefault.jpg',
        published_at: null,
        title: 'Return of the Obra Dinn - Hopefully a Classic',
      },
    ],
    twitch_videos: [
      {
        id: '2077161325',
        image: 'https://static-cdn.jtvnw.net/cf_vods/d1m7jfoe9zdc1j/d75a52cb73f7318bcf18_andersonjph_50514887053_1709225208//thumb/thumb0-%{width}x%{height}.jpg',
        published_at: '2024-02-29T16:46:53Z',
        title: "You And Me, Neko. When The Weebs Cry (streams are not back. this is a special leap day event)",
      },
      {
        id: '1918636039',
        image: 'https://static-cdn.jtvnw.net/cf_vods/d1m7jfoe9zdc1j/2733d776d4316a30a7f5_andersonjph_16973052550_3205530294//thumb/thumb1918636039-%{width}x%{height}.jpg',
        published_at: '2023-09-06T15:25:42Z',
        title: "Highlight: There's only 12 Minutes in 12 Minutesium! - AI Somnium 2 starts on Tuesday.",
      },
    ],
    twitter: [],
  },
};

const mockSavedCreators: Creator[] = [{ id: 9, name: 'Joseph Anderson' }]; // Update the id value to a number

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '9' }), 
}));

test('renders details page with correct creator name', async () => {
  render(
    <Details
      savedCreators={mockSavedCreators}
      favoriteCreator={() => {}}
      unfavoriteCreator={() => {}}
    />
  );

  await waitFor(() => {
    expect(screen.getByText('Joseph Anderson')).toBeInTheDocument();
  });
});

test('renders Youtube and Twitch button', async () => {
  render(
    <Details
      savedCreators={mockSavedCreators}
      favoriteCreator={() => {}}
      unfavoriteCreator={() => {}}
    />
  );

  await waitFor(() => {
    expect(screen.getByText('Youtube')).toBeInTheDocument();
    expect(screen.queryByText('Twitch')).toBeInTheDocument();
  });
});

