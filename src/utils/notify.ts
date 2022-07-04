import { toast } from 'react-toastify';

export const notifyError = (text: string) =>
  toast.error(text, {
    position: 'top-right',
  });
