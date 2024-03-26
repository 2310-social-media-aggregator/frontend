// Details.tsx
import './Details.css'
import Youtube from '../Youtube/Youtube';
import Twitch from '../Twitch/Twitch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Creator } from '../../types';
import mockdata from '../../mock-data-dana';


interface DetailsProps {
	myCreators: Creator[];
	follows: number[];
}

function Details({ myCreators, follows }: DetailsProps) {
	const { id } = useParams();

	const [selectedButton, setSelectedButton] = useState<string>('youtube');

	const handleButtonClick = (buttonId: string) => {
		setSelectedButton(buttonId);
	};

	useEffect(() => {
		console.log("button changed to: ", selectedButton)
	}, [selectedButton])


	const creator = myCreators.find(creator => creator.id === parseInt(id || '', 10));

	return (
		<div className='details'>
			{creator && (
				<>
					<h2>{creator.attributes.name}'s Details</h2>
					<div className="socials-header">
						<button
							className={selectedButton === 'youtube' ? 'selected' : ''}
							onClick={() => handleButtonClick('youtube')}
						>
							Youtube
						</button>
						<button
							className={selectedButton === 'twitch' ? 'selected' : ''}
							onClick={() => handleButtonClick('twitch')}
						>
							Twitch
						</button>
						<button
							className={selectedButton === 'ect' ? 'selected' : ''}
							onClick={() => handleButtonClick('ect')}
						>
							Etc.
						</button>
					</div>

					{selectedButton === 'youtube' && (
						<>
							{mockdata.data[0].attributes.youtube_videos.length === 0 ? (
								<p>No videos available for this section</p>
							) : (
								mockdata.data[0].attributes.youtube_videos.map(video => (
									<Youtube key={video.id} videoId={video.id} />
								))
							)}
						</>
					)}
					{selectedButton === 'twitch' && (
						<>
							{mockdata.data[1].attributes.youtube_videos.length === 0 ? (
								<p>No videos available for this section</p>
							) : (
								mockdata.data[1].attributes.youtube_videos.map(video => (
									<Twitch key={video.id} videoId={video.id} />
								))
							)}
						</>
					)}

				</>
			)}
		</div>
	);
};

export default Details;
