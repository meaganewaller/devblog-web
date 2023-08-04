import ReactModal from 'react-modal';
import ReactDOM from 'react-dom';
import Link from 'next/link';

const Modal = ({ onClose, children, title }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div className="modal-overlay">
    <div className="modal-wrapper">
    <div className="modal">
    <div className="modal-header">
    <Link href="#" onClick={handleCloseClick}>
    x
    </Link>
    </div>
    {title && <h1>{title}</h1>}
    <div className="modal-body">{children}</div>
    </div>
    </div>
    </div>
  )

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  )
}

export default Modal;
