// Externals
import fetch from 'node-fetch'

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint)
    return await response.json()
  } catch (err) {
    console.error(err)
  }
}
