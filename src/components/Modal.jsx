import styles from './Modal.module.css';

const Modal = ({children, onClose}) => {
    return (
        <>
            <div className={styles.backdrop} onClick={onClose}>
                <dialog open className={styles.modal}>
                    {children}
                </dialog>
            </div>
        </>
    )
}

export default Modal;