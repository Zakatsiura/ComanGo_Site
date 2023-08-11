import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import styles from './TimeLine.module.css';

const TimeLine = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const data =
        language === 'en'
            ? [
                  {
                      year: '2023',
                      title: 'Comango Agency',
                      text: 'Founder and CEO ComanGo Agency',
                  },
                  {
                      year: '2022',
                      title: '6 years of experience with software development',
                      text: 'Tech Lead - Web Application Development',
                  },
                  {
                      year: '2021',
                      title: 'Software Engineer | APROBIT',
                      text: 'I worked on a centralized exchange based in the Republic of Korea, called Aprobit, implementing Coingecko and CoinMarketCap integrations',
                  },
                  {
                      year: '2018',
                      title: 'Openware | Helios',
                      text: 'I had a lead on a component that was the main authorization service (KYC provider), implemented different authz integrations',
                  },
                  {
                      year: '2017',
                      title: 'Software Engineer | Helios Technologies',
                      text: 'I built time and invoice management tool for internal company usage',
                  },
              ]
            : [
                  {
                      year: '2023',
                      title: 'Comango Agency',
                      text: 'Засновник та CEO ComanGo Agency',
                  },
                  {
                      year: '2022',
                      title: '6 років досвіду у розробці',
                      text: 'Tech Lead - Розробка веб-додатків',
                  },
                  {
                      year: '2021',
                      title: 'Software Engineer | APROBIT',
                      text: 'Працювала на централізованій біржі в Республіці Корея під назвою Aprobit, реалізуючи інтеграцію Coingecko та CoinMarketCap',
                  },
                  {
                      year: '2018',
                      title: 'Openware | Helios',
                      text: 'Розробка компоненту, який був основною службою авторизації (постачальник KYC), реалізація різних інтеграцій авторизації',
                  },
                  {
                      year: '2017',
                      title: 'Software Engineer | Helios Technologies',
                      text: 'Розробка інструменту керування часом і рахунками для внутрішнього використання компанії',
                  },
              ];
    return (
        <>
            <div className={styles.container}>
                <div className={styles.container__bg}>
                    <div className={styles.wrapper}>
                        <h1 className={styles.title__main}>
                            {language === 'en'
                                ? 'Milestones'
                                : 'Ключові моменти'}
                        </h1>
                        <ul className={styles.list}>
                            {data.map((item, index) => (
                                <li className={styles.list__item} key={index}>
                                    <div className={styles.date}>
                                        {item.year}
                                    </div>
                                    <div className={styles.title}>
                                        {item.title}
                                    </div>
                                    <div className={styles.descr}>
                                        {item.text}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export { TimeLine };
