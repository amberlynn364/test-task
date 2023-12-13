import { ButtonProps } from './ButtonTypes';
import styles from './Button.module.css';

export default function Button({ children, disabled, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={styles.button}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
