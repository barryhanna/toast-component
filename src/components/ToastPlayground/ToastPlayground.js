import React from 'react';

import Button from '../Button';
import ToastMesssageInput from '../ToastMesssageInput/ToastMesssageInput';
import VariantRadioGroup from '../VariantRadioGroup/VariantRadioGroup';

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <ToastMesssageInput />
        <VariantRadioGroup />
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
