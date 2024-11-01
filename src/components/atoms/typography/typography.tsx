'use client';
import React from 'react';
import styles from './typography.module.scss';

export interface TypographyProps {
	children: React.ReactNode;
	variant: 'h1' | 'p';
	bold?: boolean;
	color?: 'white' | 'green';
	id?: string;
}

const Typography: React.FC<TypographyProps> = ({
	children,
	variant,
	bold = false,
	color = 'white',
	id,
}: TypographyProps): JSX.Element => {
	const Tag = variant;

	const weight = bold ? 'bold' : 'regular';

	return (
		<Tag
			{...id && { id }}
			className={`${styles[variant]} ${styles[weight]} ${styles[color]}`}
		>
			{children}
		</Tag>
	);
};

export default Typography;
