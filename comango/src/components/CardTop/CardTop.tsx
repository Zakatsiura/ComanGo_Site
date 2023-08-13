import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import styles from './CardTop.module.css';
import { cardDataEn, cardDataUa } from '../../constants/cardData'

const CardTop = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const data = language === 'en' ? cardDataEn : cardDataUa;

    return (
        <>
            <section className={styles.fleet} id="about">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        {locales[language].cardtop__title}
                    </h2>
                    <div className={styles.header}>
                        <p className={styles.text}>
                            {locales[language].cardtop__text1}
                        </p>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.main__row}>
                            {data.map((text, index) => (
                                <div className={styles.card} key={index}>
                                    <div
                                        className={styles.card__img}
                                        style={{
                                            backgroundImage: `url(${text.image})`,
                                        }}
                                    ></div>
                                    <div className={styles.card__content}>
                                        <h3 className={styles.card__title}>
                                            {text.title}
                                        </h3>
                                        <div className={styles.card__body}>
                                            {text.body}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className={styles.text}>
                            {locales[language].cardtop__text2}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export { CardTop };
