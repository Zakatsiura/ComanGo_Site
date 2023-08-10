import styles from './Menu.module.css';

const menuItems = [
    { item: 'About', link: '#' },
    { item: 'Stack', link: '#' },
    { item: 'Portfolio', link: '#' },
    { item: 'Contact', link: '#' },
];

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
