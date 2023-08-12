import React, { useContext, useEffect, useRef } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import styles from './Video.module.css';
// import main from '../../assets/video/laptop.mp4';

const Video: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement && videoElement.muted) {
            const playPromise = videoElement.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {}).catch((error) => {});
            }
        }
    }, []);

    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <>
            <section className={styles.main}>
                <div className={styles.overlay}></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video}
                    ref={videoRef}
                >
                    {/* <source src={main} type="video/mp4" /> */}
                </video>
                <div className={styles.content}>
                    <h1 className={styles.content}>
                        {/* {locales[language].slogan} */}
                    </h1>
                </div>
            </section>
        </>
    );
};

export { Video };
