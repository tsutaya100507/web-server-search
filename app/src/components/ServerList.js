import React, { Component, useLayoutEffect } from "react"
import ServerListItem from './ServerListItem'
import { connect } from "react-redux"
import { getServers } from "../actions/index"
// import serverList from '../db.json';

class ServerList extends Component {

  componentDidMount () {
    console.log("aaa")
    console.log(this.props.getServers())
    // dispatch(getServers())
    this.props.getServers()
  }

  render () {

    console.log("propsaaa", this.props.servers)
    // const serverList = this.props.servers.map(item => (<ServerListItem />))
    return (
      <React.Fragment>
        {this.props.servers.map(item => (<ServerListItem item={item} key={item.id} />))}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ servers: state.servers })

const mapDispatchToProps = ({ getServers })

export default connect(mapStateToProps, mapDispatchToProps)(ServerList)