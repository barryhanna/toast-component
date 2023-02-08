import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, variant, isOpen, setIsOpen }) {
  function dismissToast() {
    setIsOpen(false);
  }
  if (!isOpen) return '';

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon variant={variant} size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={dismissToast}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

function Icon({ variant, size, className }) {
  let icon = '';

  switch (variant) {
    case 'notice':
      icon = <Info size={size} />;
      break;
    case 'warning':
      icon = <AlertTriangle size={size} />;
      break;
    case 'success':
      icon = <CheckCircle size={size} />;
      break;
    case 'error':
      icon = <AlertOctagon size={size} />;
      break;
    default:
      icon = <Info size={size} />;
      break;
  }
  return icon;
}

export default Toast;
