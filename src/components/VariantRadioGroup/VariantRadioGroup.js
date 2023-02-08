import React from 'react';
import styles from '../ToastPlayground/ToastPlayground.module.css';
import VariantRadioItem from '../VariantRadioItem/VariantRadioItem';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function VariantRadioGroup({ variant, setVariant }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {VARIANT_OPTIONS.map((v) => (
          <VariantRadioItem
            key={v}
            variant={v}
            setVariant={setVariant}
            checked={v === variant}
          />
        ))}
      </div>
    </div>
  );
}

export default VariantRadioGroup;
