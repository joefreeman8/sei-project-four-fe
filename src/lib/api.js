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
export function favoriteDog(dogId, object) {
  return axios.post(`${baseUrl}/dogs/${dogId}/favorites/`, object, headers())
}

export function removeFavorite(dogId, favoriteId) {
  return axios.delete(`${baseUrl}/dogs/${dogId}/favorites/${favoriteId}/`)
}