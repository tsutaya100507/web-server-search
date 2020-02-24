import React from 'react'

const ServerListItem = (props) => {
  const link = "https://" + props.item.host
  return (
    <div>
      <span>{props.item.host}</span><a href={link} target="blank">{props.item.name}</a>
    </div>
  )
}

export default ServerListItem