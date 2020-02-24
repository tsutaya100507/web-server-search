import React from "react"

const SearchForm = ({GetFilteredServers}) => {
  console.log("aaa")

  // const GetFilteredServers = (e) => {
  //   console.log("e", e.target.value)
  //   this.props.getFilteredServers(e.target.value)
  // }

  return (
    <input type="text" onChange={GetFilteredServers} ></input>
  )
}

export default SearchForm