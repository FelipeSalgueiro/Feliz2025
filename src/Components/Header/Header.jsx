import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import logoHeader from "../../assets/logoHeader.png"
import Home from '../Home/Home.jsx'
import s from './header.module.scss'

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <section className={s.LogoHeader}>
                    <img src={logoHeader} alt="A imagem possui uma garrafa aberta de champagne atrás de uma taça cheia de champagne e ao lado uma mensagem que diz Feliz 2025." />
                </section>
                <nav>
                    <ul>
                        <li><Link to='/'>Paz</Link></li>
                        <li><Link to='/'>Saúde</Link></li>
                        <li><Link to='/'>Alegria</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}