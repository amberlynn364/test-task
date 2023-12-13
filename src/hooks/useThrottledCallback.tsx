import { ChangeEvent, useRef } from 'react';

export type ThrottledCallback = (event: ChangeEvent<HTMLInputElement>) => void;

export default function useThrottledCallback(
  cb: (value: string) => void,
  delay: number
): ThrottledCallback {
  const timeoutRef = useRef<number | null>(null);

  const throttledCallback: ThrottledCallback = (event) => {
    const { value } = event.target;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      cb(value);
    }, delay);
  };

  return throttledCallback;
}
