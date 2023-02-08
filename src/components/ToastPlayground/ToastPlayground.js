import React from 'react';

import Button from '../Button';
import Toast from '../Toast';
import ToastMesssageInput from '../ToastMesssageInput/ToastMesssageInput';
import VariantRadioGroup from '../VariantRadioGroup/VariantRadioGroup';

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  const [variant, setVariant] = React.useState('notice');
  const [message, setMessage] = React.useState('Deafult');
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <Toast isOpen={isOpen} setIsOpen={setIsOpen} variant={variant}>
        {message}
      </Toast>

      <div className={styles.controlsWrapper}>
        <ToastMesssageInput message={message} setMessage={setMessage} />
        <VariantRadioGroup variant={variant} setVariant={setVariant} />
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setIsOpen(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
