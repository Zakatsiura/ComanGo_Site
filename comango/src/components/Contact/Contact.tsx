import styles from './Contact.module.css';

const Contact = () => {
    return (
        <>
            <div id='contact' className={styles.container}>
                <div className={styles.container__bg}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>Contact Us</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Contact };
