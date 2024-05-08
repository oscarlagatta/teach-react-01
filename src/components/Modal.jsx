import styles from './Modal.module.css';

const Modal = ({children, onClose}) => {

    console.log(onClose)
    return (<>
            <div className={styles.backdrop}>
                <dialog open className={styles.modal}>
                    {children}
                </dialog>
            </div>
        </>)
}

export default Modal;