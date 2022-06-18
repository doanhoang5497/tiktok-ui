import { forwardRef, useState } from 'react'
import classNames from 'classnames';
import images from '../../assets/images';
import styles from './Image.module.scss'

const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('')
    const handleError = () => {
        setFallBack(customFallback)
    };
    return <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallBack || src}
        alt={alt}
        {...props}
        onError={handleError}
    />
});

export default Image;