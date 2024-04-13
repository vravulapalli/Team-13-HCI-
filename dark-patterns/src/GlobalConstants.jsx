import { useEffect } from "react";

const GLOBAL_CONSTANTS = {
  backend_host: import.meta.env.VITE_BACKEND_API_URL,

  token: "Bearer " + (localStorage.getItem("token") || ""),
  DEFAULT_IMAGE: "https://storage.googleapis.com/adya_upload_pdf/jpeg/file-6acd5540-8515-4d65-96e2-149faca28e45.jpeg"
};

export const useGlobalConstants = () => {
  const handleStorageEvent = (event) => {
  if (event.key === "token") {
      GLOBAL_CONSTANTS.token = "Bearer " + event.newValue;
    }
  };
  useEffect(() => {
    window.addEventListener("storage", handleStorageEvent);
    
    return () => {
      window.removeEventListener("storage", handleStorageEvent);
    };
  }, []);
};

export default GLOBAL_CONSTANTS;
