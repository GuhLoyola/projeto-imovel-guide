import '../styles/modal.css'

function Modal({isOpen, onClose, children}) {
    if(!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <hr />
            <button className="modal-close" onClick={onClose}>X</button>
            {children}
        </div>
    </div>
  )
}

export default Modal