import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import styles from './Portfolio.module.css';
import portfolio1 from '../../assets/images/portfolio1.png';
import portfolio2 from '../../assets/images/portfolio2.png';
import { locales } from '../../locales/locales';

const Portfolio = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    return (
        <>
            <div id="portfolio" className={styles.wrapper}>
                <h2 className={styles.title}>
                    {locales[language].portfolio__title}
                </h2>
                <p className={styles.text}>
                    {locales[language].portfolio__text}
                </p>
                <div className={styles.jobs__wrappes}>
                    <div className={styles.link}>
                        <a href="https://duuuje.com/" target="blank">
                            <img
                                className={styles.link__img}
                                src={portfolio1}
                                alt="pic"
                            />
                            <h3 className={styles.link__desc}>
                                Duuuje Brand | E-commerce | Figma
                            </h3>
                        </a>
                    </div>
                    <div className={styles.link}>
                        <a href="https://travelbee.com.ua/" target="blank">
                            <img
                                className={styles.link__img}
                                src={portfolio2}
                                alt="pic"
                            />
                            <h3 className={styles.link__desc}>
                                Landing | Travel Agency | Figma
                            </h3>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Portfolio };
