import logoInsta from '../../assets/logoInstagram.png'
import logoFace from '../../assets/logoFacebook.png'
import logoLinked from '../../assets/logoLinkedin.png'
import s from './footer.module.scss'

export default function Footer() {
    return (
        <footer>
            <nav className={s.navFooter}>
                <a href=""><img src={logoLinked} alt="Imagem possui um logo do LinkedIn." /></a>
                <a href=""><img src={logoFace} alt="Imagem possui um logo do Facebook" /></a>
                <a href=""><img src={logoInsta} alt="Imagem possui um logo do Instagram" /></a>
            </nav>
        </footer>
    )
}