import MaskedInput from "react-text-mask"
import '../styles/contato.css'

function Contato() {

    const phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    const cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  return (
    <div className="container-grid contato">
        <h2 className="titulo" >Mande uma mensagem: </h2>
        <MaskedInput mask={cpfMask} placeholder="Digite seu CPF" className="input "/>
        <MaskedInput mask={phoneMask} placeholder="Digite seu telefone" type="tel" className="input"/>
        <textarea name="assunto" cols="30" rows="50" placeholder="Digite o assunto"></textarea>
        <button onClick={() => alert('Mensagem enviada com sucesso.')}>Enviar Mensagem</button>
    </div>
  )
}

export default Contato