import { useState } from 'react';
import classNames from 'classnames';
import image from '../../assets/Image';
import styles from './Image.module.scss';

export default function Image({ ref, src, alt, className, ...props }) {
    const [fallback, setFallback] = useState(image.noImage);
    const handleError = () => {
        setFallback('');
    };
    return (
        <>
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        </>
    );
}
