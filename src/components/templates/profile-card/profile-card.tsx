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
		<article
			className={styles.profileCard}
			aria-label={`Profile of ${profile.name}`}
			aria-labelledby='profile-name'
			aria-describedby='profile-bio social-links'
		>
			<Image src={profile.avatar} alt={`Avatar of ${profile.name}`} />
			<section id='introduction' className={styles.introduction}>
				<h2 className={styles.sr_only}>Profile Information</h2>
				<Typography variant='h1' id='profile-name' bold>
					{profile.name}
				</Typography>
				<Typography variant='p' bold color='green'>
					{profile.city}, {profile.country}
				</Typography>
			</section>
			<Typography variant='p' id='profile-bio'>
				"{profile.bio}"
			</Typography>
			<section id='social-links' className={styles.socialLinks}>
				<h2 className={styles.sr_only}>Social Links</h2>
				{profile.social.map((socialLink) => (
					<Button key={socialLink.name} link={socialLink} />
				))}
			</section>
		</article>
	);
};

export default ProfileCard;
