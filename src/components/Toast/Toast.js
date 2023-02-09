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

function Toast({
  children,
  variant,
  isOpen,
  setIsOpen,
  deleteToast,
  ...delegated
}) {
  if (!isOpen) return '';

  return (
    <div className={`${styles.toast} ${styles[variant]}`} {...delegated}>
      <div className={styles.iconContainer}>
        <Icon variant={variant} size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{`${variant} - `}</VisuallyHidden>
        {children}
      </p>
      <button
        type="button"
        className={styles.closeButton}
        aria-label="Dismiss Message"
        aria-live="off"
        onClick={(e) => deleteToast(delegated['data-index'])}
      >
        <X size={24} />
      </button>
    </div>
  );
}

function Icon({ variant, size }) {
  const VariantIcon = ICONS_BY_VARIANT[variant];
  const icon = <VariantIcon size={size} />;
  return icon;
}

export default Toast;
