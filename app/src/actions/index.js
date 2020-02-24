import axios from 'axios'

export const GET_SERVERS = 'GET_SERVERS'

const ROOT_URL = "http://localhost:3001/"

export const getServers = () => async dispatch => {
  const response = await axios.get(ROOT_URL + "servers")
  dispatch({ type: GET_SERVERS, response})
}
