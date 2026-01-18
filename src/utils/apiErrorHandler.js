import { toast } from "react-toastify";

const API_LIMIT_TOAST_ID = "api-limit-reached";

export const handleApiError = (status) => {
  if (status === 429) {
    toast.error(
      "Se alcanzó el límite de peticiones a la API. Por favor, intentá nuevamente más tarde.",
      {
        toastId: API_LIMIT_TOAST_ID,
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  }
};
