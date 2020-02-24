import React from 'react'

const ServerListItem = (props) => {
  return (<div>{props.item.host} {props.item.name}</div>)
}

export default ServerListItem