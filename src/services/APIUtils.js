import { API_BASE_URL } from '../constants'
import axios from 'axios'
export const postLogin = async values => {
  return axios.post(`${API_BASE_URL}/v1/users/login`, values)
}
export const postUserRegistration = async values => {
  return axios.post(`${API_BASE_URL}/v1/users/register`, values)
}
export const postForgotPassword = async values => {
  return axios.post(`${API_BASE_URL}/v1/users/forgot-password`, values)
}
export const postForgotPasswordChange = async values => {
  return axios.post(`${API_BASE_URL}/v1/users/forgot-password-change`, values)
}
export const getDeliveries = async => {
  return axios.get(`${API_BASE_URL}/v1/deliveries`)
}
export const postDelivery = async (id, values) => {
  return axios.post(`${API_BASE_URL}/v1/orders/delivery/${id}`, values)
}
export const postDeliveryData = async (id, values) => {
  return axios.post(`${API_BASE_URL}/v1/deliveryData/${id}`, values)
}
export const postCheckout = async id => {
  return axios.post(`${API_BASE_URL}/v1/orders/checkout/${id}`)
}
export const postAddToCart = async values => {
  return axios.post(`${API_BASE_URL}/v1/orders/addToCart`, values)
}
export const postRemoveFromCart = async values => {
  return axios.post(`${API_BASE_URL}/v1/orders/removeFromCart`, values)
}
export const getSessions = async page => {
  return axios.get(`${API_BASE_URL}/v1/trainingSessions?page=${page}`)
}
export const getProduct = async id => {
  return axios.get(`${API_BASE_URL}/v1/products/${id}`)
}
export const getAccountDetails = async id => {
  return axios.get(`${API_BASE_URL}/v1/user/${id}`)
}
export const getUserDetails = async id => {
  return axios.get(`${API_BASE_URL}/v1/user/${id}`)
}
export const postOrder = async values => {
  return axios.post(`${API_BASE_URL}/v1/orders`, values)
}
export const mergeOrder = async values => {
  return axios.post(`${API_BASE_URL}/v1/orders/mergeCart`, values)
}
export const postContact = async values => {
  return axios.post(`${API_BASE_URL}/v1/contacts`, values)
}
export const getOrder = async id => {
  return axios.get(`${API_BASE_URL}/v1/orders/${id}`)
}
export const getUserOrders = async (id, values) => {
  return axios.get(`${API_BASE_URL}/v1/orders/getUserOrders/${id}`, values)
}
export const confirmOrder = async id => {
  return axios.post(`${API_BASE_URL}/v1/orders/confirmOrder/${id}`)
}
export const getSpecificOrderItems = async (id, orderId) => {
  return axios.get(
    `${API_BASE_URL}/v1/orders/getSpecificOrderItems/${id}/${orderId}`
  )
}
export const getProductsBasedOnTitle = async (title, page) => {
  return axios.get(`${API_BASE_URL}/v1/categories/title/${title}?page=${page}`)
}

export const bookSession = async (data) => {
  return axios.post(`${API_BASE_URL}/v1/bookings/book/`,data)
}
