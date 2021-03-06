/* 
后台管理的一级路由组件
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

import { removeUserToken } from '../../redux/action-creators/user'

class Admin extends Component {

  logout = () => {
    this.props.removeUserToken()
  }

  render() {
    // 如果当前没有登陆, 自动跳转到登陆界面
    if (!this.props.hasLogin) {
      return <Redirect to="/login"/>
    }

    return (
      <div>
        <p>Hello, {this.props.user.username}</p>

        <button onClick={this.logout}>退出登陆</button>


      </div>
    )
  }
}

export default connect(
  state => ({user: state.user.user, hasLogin: state.user.hasLogin}),
  {removeUserToken}
)(Admin)
