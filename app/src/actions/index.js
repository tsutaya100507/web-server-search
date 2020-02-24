import axios from 'axios'

export const GET_SERVERS          = 'GET_SERVERS'
export const GET_FILTERED_SERVERS = 'GET_FILTERED_SERVERS'

const ROOT_URL = "http://localhost:3001/"

export const getServers = () => async dispatch => {
  const response = await axios.get(ROOT_URL + "servers")
  dispatch({ type: GET_SERVERS, response})
}

export const getFilteredServers = (word) => async dispatch => {
  console.log("word", word)
  dispatch({ type: GET_FILTERED_SERVERS, word})
}