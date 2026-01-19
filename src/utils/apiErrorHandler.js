import { toast } from "react-toastify";

const API_LIMIT_DAILY_TOAST_ID = "api-limit-daily";
const API_LIMIT_RATE_TOAST_ID = "api-limit-rate";

export const handleApiError = (status) => {
  if (status === 429) {
    toast.warning(
      "Se realizaron demasiadas peticiones en poco tiempo. Esperá unos minutos e intentá nuevamente.",
      {
        toastId: API_LIMIT_RATE_TOAST_ID,
        autoClose: 25000,
        closeOnClick: true,
        draggable: true,
      }
    );
    return;
  }

  if (status === 403) {
    toast.error(
      "Se alcanzó el límite diario de peticiones a la API. La aplicación no podrá mostrar nuevos datos hasta mañana.",
      {
        toastId: API_LIMIT_DAILY_TOAST_ID,
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  }
};
