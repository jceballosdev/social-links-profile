'use client';
import React from 'react';
import styles from './profile-card.module.scss';
import { Profile } from '@/types';
import { Button, Image, Typography } from '@/components/atoms';

export interface ProfileCardProps {
	profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
	profile,
}: ProfileCardProps): JSX.Element => {
	return (
		<article className={styles.profileCard}>
			<Image src={profile.avatar} alt={profile.name} />
			<section id='introduction' className={styles.introduction}>
				<Typography variant='h1' bold>
					{profile.name}
				</Typography>
				<Typography variant='p' bold color='green'>
					{profile.city},{profile.country}
				</Typography>
			</section>
			<Typography variant='p'>"{profile.bio}"</Typography>
			<section id='social-links' className={styles.socialLinks}>
				{
					profile.social.map((socialLink) => (
						<Button key={socialLink.name} socialLinks={socialLink} />
					))
				}
			</section>
		</article>
	);
};

export default ProfileCard;
