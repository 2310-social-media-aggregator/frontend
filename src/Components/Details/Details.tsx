import './Details.css'
import Youtube from '../Youtube/Youtube';
import Twitch from '../Twitch/Twitch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Creator , CreatorInfo, YoutubeVideo, TwitchVideo} from '../../types';
import { getCreatorInfo } from '../../apiCalls';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

type DetailsProps = {
	displayedCreators: Creator[] | null
}

function Details({ displayedCreators }: DetailsProps) {
	const { id } = useParams();
	const [selectedButton, setSelectedButton] = useState<string>('youtube');
	const [creatorInfo, setCreatorInfo] = useState<CreatorInfo | null>(null);

	const handleButtonClick = (buttonId: string) => {
		setSelectedButton(buttonId);
	};

	let creator;
	if (displayedCreators) {
		creator = displayedCreators.find(creator => creator.id === parseInt(id || '', 10));
	}

	useEffect(() => {
		getCreatorInfo(parseInt(id || '', 10))
		.then(data => {
			setCreatorInfo(data.data);
		})
	}, [id])

	return (
		<div className='details-page'>
			{creator && (
				<section className='details-overlay'>
					<div className='btn-container'>
						<button className='hrt-btn'><MdFavoriteBorder /></button>
					</div>
					<h2 className='creator-name'>{creator.name}</h2>
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
					</div>

					{selectedButton === 'youtube' && (
						<>
							{creatorInfo?.attributes.youtube_videos.length === 0 ? (
								<p>No videos available for this section</p>
							) : (
								creatorInfo?.attributes.youtube_videos.map(video => (
									<Youtube key={video.id} videoId={video.id} />
								))
							)}
						</>
					)}
					{selectedButton === 'twitch' && (
						<>
							{creatorInfo?.attributes.youtube_videos.length === 0 ? (
								<p>No videos available for this section</p>
							) : (
								creatorInfo?.attributes.twitch_videos.map(video => (
									<Twitch key={video.id} videoId={video.id} />
								))
							)}
						</>
					)}
				</section>
			)}
		</div>
	);
};

export default Details;
