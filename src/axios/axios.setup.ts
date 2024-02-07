import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { axiosRequestConfiguration } from "./axios.config";

const initializeAxios = (config: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create(config);
  return axiosInstance;
};

const http = initializeAxios(axiosRequestConfiguration);

export default http;
