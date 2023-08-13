import React, { useState, useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { menuItemsEn, menuItemsUa } from '../../constants/menuItems';
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
    const [isActive, setIsActive] = useState(false);
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const menuItems = language === 'en' ? menuItemsEn : menuItemsUa;

    const toggleBodyScroll = (shouldScroll: boolean) => {
        document.body.style.overflow = shouldScroll ? 'hidden' : 'auto';
    };

    const toggleActive = () => {
        setIsActive((prevIsActive) => !prevIsActive);
        toggleBodyScroll(!isActive);
    };

    return (
        <>
            <div
                className={`${styles.menu__item} ${
                    isActive ? styles.active : ''
                }`}
                onClick={toggleActive}
            >
                <span className={`${styles.menu__item_span}`}></span>
                <span className={`${styles.menu__item_span}`}></span>
                <span className={`${styles.menu__item_span}`}></span>
                {isActive && (
                    <div className={styles.menuItems}>
                        <div className={styles.menuItemsContainer}>
                            {menuItems.map((menuItem, index) => (
                                <a
                                    href={menuItem.link}
                                    key={index}
                                    className={styles.menuItem_link}
                                >
                                    {menuItem.item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export { BurgerMenu };
