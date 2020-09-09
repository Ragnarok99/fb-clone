import React from 'react';

import Story from './Story';

import './StoryReel.css';

function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				image="https://d14pr3cu5atb0x.cloudfront.net/cms/uploads/2019/01/how-to-post-a-video-on-instagram-582x388.jpg"
				profileSrc="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/136697800/original/ad0b0ec86b4d6cc39a8f2350c1979d0be2182691/do-youtube-banner-watermark-avatar-logo-for-your-channel.png"
				title="Emmanuel Villegas"
			></Story>
			<Story
				image="https://www.socialmediaexaminer.com/wp-content/uploads/2018/04/instagram-reshare-post-stories-how-to-600-1.png"
				profileSrc="https://cdn5.f-cdn.com/contestentries/759579/18959338/57c4a76e1040e_thumb900.jpg"
				title="Kritine Kook"
			></Story>
			<Story
				image="https://i.pinimg.com/originals/22/5f/1a/225f1ad64d4f57f11c3b0557df3f340d.jpg"
				profileSrc="https://www.wallpapers4u.org/wp-content/uploads/elijah_wood_actor_person_profile_brunette_smile_18910_1920x1080.jpg"
				title="Alan Svnierd"
			></Story>
		</div>
	);
}

export default StoryReel;
