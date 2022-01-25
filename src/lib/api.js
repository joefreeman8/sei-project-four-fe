import axios from 'axios'

const baseUrl = '/api'

// * Dog Requests

export function getAllDogs() {
  return axios.get(`${baseUrl}/dogs`)
}

// * User Requests
export function registerUser(formData) {
  return axios.post(`${baseUrl}/register/`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login/`, formData)
}