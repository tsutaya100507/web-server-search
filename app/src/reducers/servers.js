import _ from 'lodash'
import { GET_SERVERS } from '../actions/index'

export default (servers = [], action) => {
  switch (action.type) {
    case GET_SERVERS:
      return action.response.data
    default:
      return servers
  }
}