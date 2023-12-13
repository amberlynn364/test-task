import CopyToClipboard from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';
import { ClipBoardProps } from './ClipBoardTypes';
import Button from '../View/Button/Button';

export default function ClipBoard({ text }: ClipBoardProps) {
  const [buttonText, setButtonText] = useState('Copy');
  const [isCopied, setIsCopied] = useState(false);

  const setCopiedState = (status: boolean, textContent: string) => {
    setIsCopied(status);
    setButtonText(textContent);
  };

  const handleCopyToClipboard = (): void => {
    if (!text) return;

    setCopiedState(true, 'Copied');
  };

  useEffect(() => {
    let timeoutID: number;

    if (isCopied) {
      timeoutID = setTimeout(() => {
        setCopiedState(false, 'Copy');
      }, 2000);
    }
    return () => clearTimeout(timeoutID);
  }, [isCopied]);

  return (
    <CopyToClipboard text={text} onCopy={handleCopyToClipboard}>
      <Button>{buttonText}</Button>
    </CopyToClipboard>
  );
}
