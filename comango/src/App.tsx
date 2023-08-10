import { Routes, Route } from 'react-router-dom';

import { MainLayout } from './layout/MainLayout';
import './App.css';
import { MainPage } from './pages/MainPage';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout />}>
                <Route index element={<MainPage />} />
            </Route>
        </Routes>
    );
}

export default App;
