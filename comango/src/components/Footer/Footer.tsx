import styles from './Footer.module.css';
import { menuItems } from '../Menu/MenuItems';

const Footer = () => {
    return (
        <>
            <div className={styles.wrapper}>
                {menuItems.map((menuItem, index) => (
                    <a
                        href={menuItem.link}
                        key={index}
                        className={styles.menuItem}
                    >
                        {menuItem.item}
                    </a>
                ))}
            </div>
        </>
    );
};

export { Footer };
