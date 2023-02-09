import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, deleteToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, isOpen, setIsOpen }, i) => (
        <li className={styles.toastWrapper} key={i}>
          <Toast
            variant={variant}
            isOpen={isOpen}
            data-index={i}
            setIsOpen={setIsOpen}
            deleteToast={deleteToast}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
