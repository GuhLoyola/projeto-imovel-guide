import { useState } from 'react';
import '../styles/regraDeTres.css'

function RegraDeTres() {

    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [proporcao1, setProporcao1] = useState('');
    const [resultado, setResultado] = useState('');
    const [erro, setErro] = useState('');

    const calcularRegraDeTres = () => {
        if (!valor1 || !valor2 || !proporcao1) {
            setErro('Por favor, preencha todos os campos.');
            return;
        }

        const v1 = parseFloat(valor1);
        const v2 = parseFloat(valor2);
        const p1 = parseFloat(proporcao1);

        if (isNaN(v1) || isNaN(v2) || isNaN(p1)) {
            setErro('Por favor, insira valores numéricos válidos.');
            return;
        }

        const result = (p1 * v2) / v1;
        setResultado(result);
        setErro('');
    };

    return (
        <div className='container-grid regra '>
            <h2 className='titulo'>Regra de 3</h2>
            <div className='line-1'>
                <input type="text" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='valor 1' />
                <hr />
                <input type="text" value={proporcao1} onChange={(e) => setProporcao1(e.target.value)} placeholder='% equivalente'/>
            </div>
            <div className='line-2'>
                <input type="text" value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder='valor 2'/>
                <hr />
                <input type="text" className='resultado' value={resultado} onChange={(e) => setResultado(e.target.value)} disabled/>
            </div>
            {erro && <div style={{ color: 'red', padding:'20px 0 0 10px' }}>{erro}</div>}
            <button onClick={calcularRegraDeTres}>Calcular</button>
        </div>
    );
}

export default RegraDeTres;