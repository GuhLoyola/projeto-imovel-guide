import logo from '../assets/logo-imovel.png'
import '../styles/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <ul>
                    <li><a href="#termos">Termos</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                </ul>
            </nav>
            <div className="footer-right">
                <p>© Copyright 2024. Todos os direitos reservados.</p>
                <a href="/">
                    <img src={ logo } alt="Logo Imóvel Guide" className='logo'/>
                </a>
            </div>

        </footer>
    )
}

export default Footer