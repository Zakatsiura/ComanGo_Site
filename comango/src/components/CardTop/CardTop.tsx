import styles from './CardTop.module.css';

const CardTop = () => {
    const cardData = [
        {
            front: 'Vision Statement',
            back: 'Empowering businesses locally and globally through innovative IT solutions, fostering freedom, health, and growth in a friendly environment. We envision a future where our technological contributions illuminate new possibilities, shaping the future of our community, our country, and the world. Our legacy will be one of courage, curiosity, and a commitment to fulfilling our full potential.',
        },
        {
            front: 'Mission Statement',
            back: "We are dedicated to developing advanced chatbots, websites, and providing insightful consultations on process automation using IT technologies. Guided by our values of freedom, health, people-first approach, and continuous growth, we strive to deliver superior results for our clients. We measure success not only in numbers but in the satisfaction and positive impact we bring to our clients and the community. We commit to embodying responsibility and ensuring our clients' success is as paramount as our own.",
        },
    ];

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {cardData.map((data, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.front}>
                                <h2>{data.front}</h2>
                            </div>
                            <div className={styles.back}>
                                <p>{data.back}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export { CardTop };
