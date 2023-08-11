import { useContext } from 'react';

import styles from './MainTop.module.css'
import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';

const MainTop = () => {

     const languageContext = useContext(LanguageContext);

     if (!languageContext) {
         return null;
     }

     const { language } = languageContext;
    return (
        <>
            <div className={styles.container}>
                <div className={styles.container__bg}>
                    <div className={styles.wrapper}>
                        <h1 className={styles.title}>
                            {locales[language].comango__title}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export { MainTop };
