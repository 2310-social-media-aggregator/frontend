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
	const [selectedContentButton, setSelectedContentButton] = useState<string>('youtube');
	const [creatorInfo, setCreatorInfo] = useState<CreatorInfo | null>(null);
	const [favorited, setFavorited] = useState<boolean>(false)

	const handleContentButtonClick = (buttonId: string) => {
		setSelectedContentButton(buttonId);
	};

	let creator;
	if (displayedCreators) {
		creator = displayedCreators.find(creator => creator.id === parseInt(id || '', 10));
	}

	const toggleHeart = () => {
		if (favorited) {
			setFavorited(false)
		} else {
			setFavorited(true)
		}
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
						<button
						onClick={() => toggleHeart()}
						className={favorited ? 'hrt-btn-empty hidden' : 'hrt-btn-empty'}>
							<MdFavoriteBorder />
						</button>
						<button
						onClick={() => toggleHeart()}
						className={favorited ? 'hrt-btn-full' : 'hrt-btn-full hidden'}>
								<MdFavorite />
						</button>
					</div>
					<h2 className='creator-name'>{creator.name}</h2>
					<div className="socials-header">
						<button
							className={selectedContentButton === 'youtube' ? 'selected' : ''}
							onClick={() => handleContentButtonClick('youtube')}
						>
							Youtube
						</button>
						<button
							className={selectedContentButton === 'twitch' ? 'selected' : ''}
							onClick={() => handleContentButtonClick('twitch')}
						>
							Twitch
						</button>
					</div>

					{selectedContentButton === 'youtube' && (
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
					{selectedContentButton === 'twitch' && (
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
