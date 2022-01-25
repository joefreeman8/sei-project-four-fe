import axios from 'axios'
import { getToken } from './auth'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

const baseUrl = '/api'

// * Dog Requests

export function getAllDogs() {
  return axios.get(`${baseUrl}/dogs`)
}

export function getSingleDog(dogId) {
  return axios.get(`${baseUrl}/dogs/${dogId}`)
}

// * User Requests
export function registerUser(formData) {
  return axios.post(`${baseUrl}/register/`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login/`, formData)
}

// * Favorite Requests
export function favoriteDog(dogId, userId) {
  return axios.post(`${baseUrl}/dogs/${dogId}/favorites/`, dogId, userId, headers())
}