import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Send from './pages/Send';

export default function App() {
    return(
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/enviado' element={<Send/>}/>
            </Routes>
    )
}
