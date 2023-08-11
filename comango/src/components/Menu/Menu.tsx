import styles from './Menu.module.css';
import { menuItems } from './MenuItems';

const Menu = () => {
    return (
        <div className={styles.wrapper}>
            {menuItems.map((menuItem, index) => (
                <a href={menuItem.link} key={index} className={styles.menuItem}>
                    {menuItem.item}
                </a>
            ))}
        </div>
    );
};

export { Menu };
