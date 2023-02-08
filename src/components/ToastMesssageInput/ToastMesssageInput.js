import React from 'react';
import styles from '../ToastPlayground/ToastPlayground.module.css';

function ToastMesssageInput({ message, setMessage }) {
  return (
    <div className={styles.row}>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: 'baseline' }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id="message"
          className={styles.messageInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ToastMesssageInput;
