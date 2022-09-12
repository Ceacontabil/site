import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Send from './pages/Send.tsx';

export default function App() {
    return(
        <HashRouter basename={process.env.PUBLIC_URL+'/'}>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/received' element={<Send/>}/>
            </Routes>
        </HashRouter>
    )
}
