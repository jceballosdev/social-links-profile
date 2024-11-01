"use client";
import React from 'react';
import styles from './image.module.scss';
import avatarPlaceholder from '@/assets/images/avatar-placeholder.webp';

export interface ImageProps  {
	src: string
	alt: string
}

const Image: React.FC<ImageProps>  = ({ src, alt}: ImageProps): JSX.Element => {

	const [hasError, setHasError] = React.useState(false);

	const loadImagePath = (fileName: string) => {
    const images = import.meta.glob('@/assets/images/*', { eager: true });
    return (images[`/src/assets/images/${fileName}`] as { default: string })?.default;
  };

	const avatarImage = loadImagePath(src)
	const finalSrc = hasError || !avatarImage ? avatarPlaceholder : avatarImage;
	
	return (
		<img className={styles.image} src={finalSrc} alt={alt} onError={() => {
			console.error(`Image not found or failed to load: ${src}`);
			setHasError(true);
		}} />
	);
};

export default Image;
