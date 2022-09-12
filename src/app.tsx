import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Send from './pages/Send';

export default function App() {
    return(
        <HashRouter basename={process.env.PUBLIC_URL+'/'}>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/enviado' element={ <Send/> } />
            </Routes>
        </HashRouter>
    )
}
