import { useContext } from 'react';

import { LanguageContext } from '../../context/languageContext';
import { locales } from '../../locales/locales';
import styles from './CardTop.module.css';
import vision from '../../assets/images/bg_22.jpg';
import mission from '../../assets/images/about-bg.jpg';

const CardTop = () => {
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }

    const { language } = languageContext;

    const data =
        language === 'en'
            ? [
                  {
                      title: 'Vision Statement:',
                      body: 'Empowering businesses locally and globally through innovative IT solutions, fostering freedom, health, and growth in a friendly environment. We envision a future where our technological contributions illuminate new possibilities, shaping the future of our community, our country, and the world. Our legacy will be one of courage, curiosity, and a commitment to fulfilling our full potential.',
                      image: vision,
                  },
                  {
                      title: 'Mission Statement:',
                      body: "We are dedicated to developing advanced chatbots, websites, and providing insightful consultations on process automation using IT technologies. Guided by our values of freedom, health, people-first approach, and continuous growth, we strive to deliver superior results for our clients. We measure success not only in numbers but in the satisfaction and positive impact we bring to our clients and the community. We commit to embodying responsibility and ensuring our clients' success is as paramount as our own.",
                      image: mission,
                  },
              ]
            : [
                  {
                      title: 'Наше бачення:',
                      body: 'Розширення можливостей бізнесу на місцевому та глобальному рівнях за допомогою інноваційних ІТ-рішень, сприяння свободі, здоров’ю та зростанню в дружньому середовищі. Ми уявляємо собі майбутнє, де наші технологічні внески висвітлюють нові можливості, формуючи майбутнє нашої спільноти, нашої країни та світу. Нашою спадщиною буде сміливість, допитливість і відданість повній реалізації нашого потенціалу.',
                      image: vision,
                  },
                  {
                      title: 'Основне завдання:',
                      body: 'Ми займаємося розробкою передових чат-ботів, веб-сайтів і наданням глибоких консультацій щодо автоматизації процесів за допомогою ІТ-технологій. Керуючись нашими цінностями свободи, здоров’я, підходу на першому місці для людей і постійного зростання, ми прагнемо забезпечувати чудові результати для наших клієнтів. Ми вимірюємо успіх не лише в цифрах, але й у задоволенні та позитивному впливі, який ми приносимо нашим клієнтам і спільноті. Ми зобов’язуємося втілювати відповідальність і гарантувати, що успіх наших клієнтів є таким же найважливішим, як і наш власний.',
                      image: mission,
                  },
              ];

    return (
        <>
            <section className={styles.fleet} id="about">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        {locales[language].cardtop__title}
                    </h2>
                    <div className={styles.header}>
                        <p className={styles.text}>
                            {locales[language].cardtop__text1}
                        </p>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.main__row}>
                            {data.map((text, index) => (
                                <div className={styles.card} key={index}>
                                    <div
                                        className={styles.card__img}
                                        style={{
                                            backgroundImage: `url(${text.image})`,
                                        }}
                                    ></div>
                                    <div className={styles.card__content}>
                                        <h3 className={styles.card__title}>
                                            {text.title}
                                        </h3>
                                        <div className={styles.card__body}>
                                            {text.body}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className={styles.text}>
                            {locales[language].cardtop__text2}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export { CardTop };
