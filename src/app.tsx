import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Send from './pages/Send';

export default function App() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL+'/'}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/send' element={<Send/>}/>
                <Route path='*' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}