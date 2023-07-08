import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()

  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    // EventsIndexはComponentクラスであるため,このEventsIndexコンポーネントはComponentクラスを継承している
    // Component(EventsIndex)クラスは初期化時にpropsを引数として受け取り、クラスのインスタンスの属性として保持します。
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {this.renderEvents()}
        </tbody>

      </table>
    )
  }
}

/**
 * mapStateToProps
 * stateを取得するための関数。connect関数の第一引数に渡す。
 * mapDispatchToProps
 * stateを書き換えるための関数。
 * connect関数の第二引数に渡す。
 */

const mapStateToProps = state => ({events: state.events})
const mapDispatchToProps = ({ readEvents })
/** こんな書き方もできるが冗長 */
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })



/** 
 * stateを一括管理しているReduxのstoreは、Reactとは別の場所にあるので、
 * Componentとstoreを繋げる必要があり、そのためにconnect関数を使います
 * */
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
