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
		<article className={styles.profileCard}
			aria-label={`Profile of ${profile.name}`}
			aria-labelledby='introduction social-links'
			aria-describedby='introduction social-links'
		>
			<Image src={profile.avatar} alt={`Avatar of ${profile.name}`} />
			<section id='introduction' className={styles.introduction}>
				<Typography variant='h1' bold>
					{profile.name}
				</Typography>
				<Typography variant='p' bold color='green'>
					{profile.city}, {profile.country}
				</Typography>
			</section>
			<Typography variant='p'>"{profile.bio}"</Typography>
			<section id='social-links' className={styles.socialLinks}>
				{
					profile.social.map((socialLink) => (
						<Button key={socialLink.name} link={socialLink} />
					))
				}
			</section>
		</article>
	);
};

export default ProfileCard;
