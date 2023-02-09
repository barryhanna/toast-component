import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import ToastMesssageInput from '../ToastMesssageInput/ToastMesssageInput';
import VariantRadioGroup from '../VariantRadioGroup/VariantRadioGroup';
import { ToastContext } from '../ToastProvider';
import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  const { setToasts } = React.useContext(ToastContext);
  const [variant, setVariant] = React.useState('notice');
  const [message, setMessage] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(true);

  const reset = React.useCallback(function reset() {
    setVariant('notice');
    setMessage('');
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setToasts((prevToasts) => {
      const newToast = { message, variant, isOpen, setIsOpen };
      return [...prevToasts, newToast];
    });
    reset();
  }

  return (
    <form className={styles.wrapper} onSubmit={(e) => handleSubmit(e)}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <div className={styles.controlsWrapper}>
        <ToastMesssageInput message={message} setMessage={setMessage} />
        <VariantRadioGroup variant={variant} setVariant={setVariant} />
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
