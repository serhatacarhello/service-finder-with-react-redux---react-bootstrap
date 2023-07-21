import axios from "axios";

export default function useApi() {
  //
  const api = axios.create();

  api.defaults.baseURL = "https://api.adoptez1artisan.com";
  api.defaults.headers.common = {
    "Content-Type": "application/json;charset=UTF-8",
  };

  return api;
}
