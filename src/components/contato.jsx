import MaskedInput from "react-text-mask"
import '../styles/contato.css'
import { useState } from "react";

function Contato() {

  const phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  const cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('')
  const [ erro, setErro ] = useState('')

  const enviarMensagem = () => {
    if (cpf.trim() !== '' && phone.trim() !== '') {
      alert('Mensagem enviada com sucesso!')
    } else {
      setErro('Por favor, preencha os campos de CPF e telefone')
      return
    }
  }

  return (
    <div className="container-grid contato">
      <h2 className="titulo" >Mande uma mensagem: </h2>
      <MaskedInput mask={cpfMask} placeholder="Digite seu CPF" className="input" onChange={(e) => setCpf(e.target.value)} />
      <MaskedInput mask={phoneMask} placeholder="Digite seu telefone" type="tel" className="input" onChange={(e) => setPhone(e.target.value)} />
      <textarea name="assunto" cols="30" rows="50" placeholder="Digite o assunto"></textarea>
      <button onClick={enviarMensagem}>Enviar Mensagem</button>
      {erro && <div style={{ color: 'red', padding:'15px 0 0 10px', fontSize: '12px' }}>{erro}</div>}
    </div>
  )
}

export default Contato