import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Send from './pages/Send';

export default function App() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL+'/site'} >
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/enviado' element={ <Send/> } />
            </Routes>
        </BrowserRouter>
    )
}
