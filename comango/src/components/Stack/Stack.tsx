import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import styles from './Stack.module.css';
import { locales } from '../../locales/locales';

import react from '../../assets/images/react.png';
import next from '../../assets/images/next_logo.png';
import html from '../../assets/images/HTML5.png';
import css from '../../assets/images/CSS3_logo.png';
import express from '../../assets/images/express_js.png';
import node from '../../assets/images/Node.png';
import ts from '../../assets/images/Typescript_logo.png';
import js from '../../assets/images/JavaScript_logo.png';

const tech = [
    {
        img: html,
        title: 'HTML',
    },
    {
        img: css,
        title: 'CSS',
    },
    {
        img: js,
        title: 'JavaScript',
    },
    {
        img: ts,
        title: 'TypeScript',
    },
    {
        img: react,
        title: 'React',
    },
    {
        img: next,
        title: 'NextJS',
    },
    {
        img: node,
        title: 'NodeJS',
    },
    {
        img: express,
        title: 'Express',
    },
];

const Stack = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <>
            <div className={styles.wrapper} id="stack">
                <h2 className={styles.title}>
                    {locales[language].stack__title}
                </h2>
                <p className={styles.text__main}>
                    {locales[language].stack__text}
                </p>
                <div className={styles.card__wrapper}>
                    {tech.map((techItem, index) => (
                        <div key={index} className={styles.card}>
                            <img
                                src={techItem.img}
                                alt={techItem.title}
                                className={styles.img}
                            />
                            <p className={styles.text}>{techItem.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export { Stack };
