import { useContext } from 'react';

import styles from './MainTop.module.css'
import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import Nadin from '../../assets/images/Nadin.png'

const MainTop = () => {

     const languageContext = useContext(LanguageContext);

     if (!languageContext) {
         return null;
     }

     const { language } = languageContext;
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    {locales[language].comango__title}
                </h1>
                <img className={styles.img} src={Nadin} alt="Nadin pic" />
            </div>
        </>
    );
};

export { MainTop };
