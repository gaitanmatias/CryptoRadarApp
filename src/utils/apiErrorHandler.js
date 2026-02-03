import { toast } from "react-toastify";

const API_ERROR_TOAST_ID = "api-error";

export const handleApiError = () => {
  toast.error(
    "No se pudo obtener los datos. Intentá nuevamente más tarde.",
    {
      toastId: API_ERROR_TOAST_ID,
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    }
  );
};
