import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Send from './pages/Send';

export default function App() {
    return(
        <HashRouter>
            <Routes>
                <Route path='/site' element={<Home/>}/>
                <Route path='/site/enviado' element={<Send/>}/>
            </Routes>
        </HashRouter>
    )
}
