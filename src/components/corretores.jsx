import MaskedInput from "react-text-mask"
import corretora from '../assets/corretora.jpg'
import corretor from '../assets/corretor.jpg'
import { useState } from "react"
import '../styles/corretores.css'

function Corretores() {

    const [telefoneSelecionado1, setTelefoneSelecionado1] = useState(null);
    const [telefoneSelecionado2, setTelefoneSelecionado2] = useState(null);


    const numerosTelefone = ['11994111729', '19971524820']


    const FormatarTelefone = ({ telefone }) => {
        return (
            <div>
                <p>Telefone: {telefone}</p>
            </div>
        )
    }

    const formatarNumero = (value) => {
        return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    }

    const handleClickTelefone1 = () => {
        setTelefoneSelecionado1(prevTelefone => prevTelefone === numerosTelefone[0] ? null : numerosTelefone[0])
    }

    const handleClickTelefone2 = () => {
        setTelefoneSelecionado2(prevTelefone => prevTelefone === numerosTelefone[1] ? null : numerosTelefone[1])
    }


    return (
        <section className="container-grid corretores">
            <div className="corretor">
                <img src={corretora} alt="Foto do perfil da corretora" />
                <div className="info-corretor">
                    <h3 className="titulo">Nome corretora</h3>
                    <p>3.000 pontos</p>
                    <a href='#' onClick={() => handleClickTelefone1()} className="ver-contato">Ver contato</a>
                    {telefoneSelecionado1 && (
                        <FormatarTelefone telefone={
                            <MaskedInput
                                mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,]}
                                guide={false}
                                value={formatarNumero(telefoneSelecionado1)}
                                readOnly
                                className="telefone"
                            />}
                        />)
                    }
                </div>
            </div>
            <div className="corretor">
                <img src={corretor} alt="Foto do perfil da corretora" />
                <div className="info-corretor">
                    <h3 className="titulo">Nome corretor</h3>
                    <p>1.260 pontos</p>
                    <a href='#' onClick={() => handleClickTelefone2()} className="ver-contato">Ver contato</a>
                    {telefoneSelecionado2 && (
                        <FormatarTelefone telefone={
                            <MaskedInput
                                mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,]}
                                guide={false}
                                value={formatarNumero(telefoneSelecionado2)}
                                readOnly
                                className="telefone"
                            />}
                        />)
                    }
                </div>
            </div>

        </section>
    )
}

export default Corretores