import React, { Component, useLayoutEffect } from "react"
import ServerListItem from './ServerListItem'
import SearchForm from './SearchForm'
import { connect } from "react-redux"
import { getServers, getFilteredServers } from "../actions/index"

class ServerList extends Component {

  componentDidMount () {
    this.props.getServers()
  }

  render () {
    const  GetFilteredServers = (e) => {
      console.log("e", e.target.value)
      this.props.getFilteredServers(e.target.value)
    }
    return (
      <React.Fragment>
        {/* <SearchForm GetFilteredServers={() => GetFilteredServers()} /> */}
        <input type="text" onChange={GetFilteredServers}></input>
        {this.props.servers.map(item => (<ServerListItem item={item} key={item.id} />))}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ servers: state.servers })

const mapDispatchToProps = ({ getServers, getFilteredServers })

export default connect(mapStateToProps, mapDispatchToProps)(ServerList)