'use client';
import React from 'react';
import styles from './button.module.scss';
import { SocialLink } from '@/types';

export interface ButtonProps {
	link: SocialLink;
}

const Button: React.FC<ButtonProps> = ({
	link,
}: ButtonProps): JSX.Element => {
	const openLink = () => {
		if (link.url) {
			window.open(link.url, '_blank');
		}
	};

	return (
		<button 
			className={styles.button} 
			onClick={() => openLink()}
			aria-label={`Open ${link.name} link in new tab`}
		>
			{link.name}
		</button>
	);
};

export default Button;
