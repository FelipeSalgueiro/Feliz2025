import AnoNovo from '../../assets/imagemAnoNovo.png'
import s from './home.module.scss'

export default function Home() {
    return (
        <main className={s.mainHome}>
            <img className={s.imgHome} src={AnoNovo} alt="Imagem possui a frase Ano Novo 2025." />
            <section className={s.textosHome}>
                <p className={s.textoFesta}>Boas Festas!!!</p>
                <h1>Felicidades!!!</h1>
                <p className={s.textoGrande}>Em 2025, vamos juntos programar,Com mais código limpo e muito para alcançar! Que o ano novo traga só funções de felicidade,E que a paz seja nossa variável de realidade!Sem bugs, sem falhas, com muito amor,Vamos debugar os problemas com ardor! E Que a vida seja sempre o output de alegria,o Vai Na Web te deseja um Ano Novo, que seja pura harmonia!</p>
            </section>
        </main>
    )
}