import logo from '../assets/logo-imovel.png'
import '../styles/header.css'

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-logo">
          <a href="/">
            <img src={logo} alt="Logo imóvel guide" className='logo' />
          </a>
        </div>
        <div className="header-menu">
        <input type="checkbox" id="menu-hamburguer" />
          <label htmlFor="menu-hamburguer">
            <div className="menu">
              <span className="hamburguer"></span>
            </div>
          </label>
        <nav className="header-nav">
          <div>
            <ul className='nav-left'>
              <li><a href="#condominios">Condomínios</a></li>
              <li><a href="#forum">Fórum</a></li>
              <li><a href="#guia">Guia</a></li>
              <li><a href="#artigo">Artigo</a></li>
              <li><a href="#ferramentas">Ferramentas</a></li>
            </ul>
          </div>
          <div>
            <ul className='nav-right'>
              <li><a href="#cotar-imovel">Cotar imóvel</a></li>
              <li><a href="#planos">Planos</a></li>
              <li><a href="#login">Entrar</a></li>
              <li><a href="https://imovelguide.com.br/cadastre-se" target='_blank' id='btn-cadastro' className='headerNav-btn'>Cadastre-se</a></li>
            </ul>
          </div>
        </nav>
        </div>
      </div>
    </header>
  )
}

export default Header