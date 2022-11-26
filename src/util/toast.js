import { toast } from 'react-toastify';

const Toast = {
    default: (message, options) => {
        toast(message ?? 'Error', options);
    },
    sucess: (message, options) => {
        toast.success(message ?? 'Error', options);
    },
    error: (message, options) => {
        toast.error(message ?? 'Error', options);
    },
    info: (message, options) => {
        toast.info(message ?? 'Error', options);
    },
    warn: (message, options) => {
        toast.warn(message ?? 'Error', options);
    }
};

export default Toast;
