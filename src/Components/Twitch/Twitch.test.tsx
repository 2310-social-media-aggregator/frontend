import React from 'react';
import { render, screen } from '@testing-library/react';
import Twitch from './Twitch';

describe('Twitch component', () => {
	const testData = [
		{ videoID: '1234567890'},
		{ videoID: '0987654321'},
		{ videoID: 'abcdefghijk'},
		{ videoID: 'z4as7da9s7d'},
	]
	testData.forEach(({ videoID}) => {
		it(`renders correctly with video ID ${videoID}` ,() => {
			render(<Twitch videoId={videoID} />);
			screen.debug();
		})
	})
});