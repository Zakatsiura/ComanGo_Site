import {
    TimeLine,
    MainTop,
    CardTop,
    Portfolio,
    Contact,
    Video,
} from '../components';

const MainPage = () => {
    return (
        <>
            <Video/>
            {/* <MainTop /> */}
            <CardTop />
            <TimeLine />
            <Portfolio />
            <Contact />
        </>
    );
};

export { MainPage };
