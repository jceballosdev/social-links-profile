"use client";
import React from 'react';
import styles from './profile.module.scss';
import { ProfileCard } from '@/components/templates/profile-card';
import { profiles } from '@/data';


const Profile: React.FC  = () => {
	return (
		<div className={styles.profile}>
 			<ProfileCard profile={profiles[0]} />
 		</div>
	);
};

export default Profile;
