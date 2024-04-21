import React from 'react';
import { render, screen } from '@testing-library/react';
import Youtube from './Youtube';

describe('Youtube component', () => {
  it('renders correctly', () => {
    const videoId = 'abcd1234'; 
    render(<Youtube videoId={videoId} />);
    const iframeElement = screen.getByTitle('YouTube video player');
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute(
      'src',
      `https://www.youtube.com/embed/${videoId}`
    );
  });
	const testData = [
    { videoId: '1234567890' },
    { videoId: '0987654321' },
    { videoId: 'abcdefghijk' },
    { videoId: 'z4as7da9s7d' },
  ];

  testData.forEach(({ videoId }) => {
    it(`renders correctly with video ID "${videoId}"`, () => {
      render(<Youtube videoId={videoId} />);
      const iframeElement = screen.getByTitle('YouTube video player');
      expect(iframeElement).toBeInTheDocument();
      expect(iframeElement).toHaveAttribute(
        'src',
        `https://www.youtube.com/embed/${videoId}`
      );
    });
  });

});