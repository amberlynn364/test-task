import { HTMLAttributes, ReactNode } from 'react';

export type ButtonProps = Omit<
  HTMLAttributes<HTMLButtonElement>,
  'className'
> & {
  children: ReactNode;
  disabled?: boolean;
};
