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

// Shuffling data 
export function shuffle(array) {
  let currentIndex = array.length, randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array
}
// * Favorite Requests
export function favoriteDog(dogId, object) {
  return axios.post(`${baseUrl}/dogs/${dogId}/favorites/`, object, headers())
}

export function removeFavorite(dogId, favoriteId) {
  return axios.delete(`${baseUrl}/dogs/${dogId}/favorites/${favoriteId}/`)
}