import _ from 'lodash'
import { GET_SERVERS, GET_FILTERED_SERVERS } from '../actions/index'

export default (servers = [], action) => {
  switch (action.type) {
    case GET_SERVERS:
      return action.response.data
    case GET_FILTERED_SERVERS:
      return servers.filter(server => word => {
        if (server.name.indexOf(word)!==-1) {
          return server
        }
      })
    default:
      return servers
  }
}