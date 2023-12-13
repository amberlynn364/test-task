import { ButtonProps } from './ButtonTypes';
import styles from './Button.module.css';

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button type="button" className={styles.button} {...props}>
      {children}
    </button>
  );
}
