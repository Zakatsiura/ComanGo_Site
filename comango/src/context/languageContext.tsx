import React, { useState, createContext, PropsWithChildren } from 'react';

type Language = 'en' | 'ua';

interface LanguageContextProps {
    language: Language;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
    undefined
);

const LanguageProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

    const toggleLanguage = () => {
        const newLanguage: Language = currentLanguage === 'en' ? 'ua' : 'en';
        setCurrentLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider
            value={{ language: currentLanguage, toggleLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };
