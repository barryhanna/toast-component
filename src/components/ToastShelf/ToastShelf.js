import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  function deleteToast(i) {
    setToasts((prevToasts) => {
      return [...prevToasts.slice(0, i), ...prevToasts.slice(i + 1)];
    });
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, isOpen, setIsOpen }, i) => (
        <li className={styles.toastWrapper} key={i}>
          <Toast
            variant={variant}
            isOpen={isOpen}
            data-index={i}
            setIsOpen={setIsOpen}
            deleteToast={() => deleteToast(i)}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
