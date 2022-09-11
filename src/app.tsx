import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Send from './pages/Send.tsx';

export default function App() {
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/received' element={<Send/>}/>
            </Routes>
        </HashRouter>
    )
}
