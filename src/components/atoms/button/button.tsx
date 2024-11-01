'use client';
import React from 'react';
import styles from './button.module.scss';
import { SocialLink } from '@/types';

export interface ButtonProps {
	socialLinks: SocialLink;
}

const Button: React.FC<ButtonProps> = ({
	socialLinks,
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={styles.button}
			onClick={() => {
				if (socialLinks.url) {
					window.open(socialLinks.url, '_blank');
				}
			}}
		>
			{socialLinks.name}
		</button>
	);
};

export default Button;
