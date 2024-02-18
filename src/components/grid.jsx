import '../styles/grid.css'
import casaImg from '../assets/casa-generica.jpg'
import RegraDeTres from './regraDeTres'
import Contato from './contato'
import Corretores from './corretores'
import { useState } from 'react'
import Modal from './modal'
import html2canvas from 'html2canvas'

function Grid() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const captureAndDownload = () => {
    html2canvas(document.getElementById('download-modal'))
      .then(function (canvas) {
        let link = document.createElement('a')
        link.download = 'screenshot.png'
        link.href = canvas.toDataURL('image/png')
        link.click();
      })
  }

  return (
    <main className="grid-container">
      <div className="grid-item corretores">
        <Corretores />
      </div>
      <div className="grid-item contato">
        <Contato />
      </div>
      <div className="grid-item regra-3">
        <RegraDeTres />
      </div>
      <div>
        <div className="grid-item modal">
          <img src={casaImg} alt="Imagem de uma casa genérica" />
        </div>
        <button onClick={openModal} className='abrir-modal'>Abrir Modal</button>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <img src={casaImg} alt="Imagem da casa genérica para o modal" />
        </Modal>
      </div>
      <div className='download'>
        <div className="grid-item baixar-modal" id='download-modal'>
          <img src={casaImg} alt="Imagem de uma casa genérica" />
          <div className="retangulo">Imóvel Guide</div>
        </div>
        <button className='btn-baixar-modal' onClick={() => captureAndDownload()}>Download</button>
      </div>
      <div className="grid-item casa">
        <img src={casaImg} alt="Imagem de uma casa genérica" />
      </div>
    </main>
  )
}

export default Grid