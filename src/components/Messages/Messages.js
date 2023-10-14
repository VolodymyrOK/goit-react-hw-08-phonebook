import { toast } from 'react-hot-toast';

export const MessageToast = (typeError, message) => {
  let options = {};

  switch (typeError) {
    case 'error': {
      options = {
        duration: 3000,
        position: 'top-center',
        style: {
          fontFamily: 'Segoe UI, sans-serif',
          color: '#ffffff',
          backgroundColor: '#ff0000',
        },
        icon: '😈',
      };
      break;
    }
    case 'ok': {
      options = {
        duration: 3000,
        position: 'top-center',
        style: {
          fontFamily: 'Segoe UI, sans-serif',
          color: '#ffffff',
          backgroundColor: '#18b613',
        },
        icon: '😃',
      };
      break;
    }
    default: {
      throw new Error(`Unsupported variant prop value - ${typeError}`);
    }
  }
  toast(message, options);
};
