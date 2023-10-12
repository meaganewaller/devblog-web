import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const config: AxiosRequestConfig = {
  baseURL,
  headers: { 'Content-Type': 'application/json' },
}

export const dwInstance: AxiosInstance = axios.create(config)

export const apiMethodInstance = <T>(
  options: AxiosRequestConfig
): Promise<T> => {
  return dwInstance(options).then((res) => res.data)
}

const refreshConfig: AxiosRequestConfig = {
  baseURL,
  headers: { 'Content-Type': 'application/json' },
}

export const refreshInstance: AxiosInstance = axios.create(refreshConfig)

export const refreshMethodInstance = <T>(
  options: AxiosRequestConfig
): Promise<T> => {
  return refreshInstance(options).then((res) => res.data)
}
