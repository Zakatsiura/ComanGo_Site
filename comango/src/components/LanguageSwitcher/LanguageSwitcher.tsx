import React, { useContext } from 'react';

import {
    LanguageContext,
    LanguageProvider,
} from '../../context/languageContext';

import style from './LanguageSwitcher.module.css';

const LanguageSwitcher: React.FC = () => {
    const { language, toggleLanguage } = useContext(LanguageContext)!;

    const handleLanguageChange = () => {
        toggleLanguage();
    };

    return (
        <>
            <select
                className={style.language__select}
                value={language}
                onChange={handleLanguageChange}
            >
                <option value="en">EN</option>
                <option value="ua">UA</option>
            </select>
        </>
    );
};

export { LanguageProvider, LanguageSwitcher };
