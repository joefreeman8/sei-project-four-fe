import axios from 'axios'

const baseUrl = '/api'

// * Dog Requests

export function getAllDogs() {
  return axios.get(`${baseUrl}/dogs`)
}