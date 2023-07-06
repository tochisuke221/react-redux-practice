import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    // AppはComponentクラスであるため,このAppコンポーネントはComponentクラスを継承している
    // Component(App)クラスは初期化時にpropsを引数として受け取り、クラスのインスタンスの属性として保持します。
    const props = this.props
    
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
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

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = ({ increment, decrement })
/** こんな書き方もできるが冗長 */
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })



/** 
 * stateを一括管理しているReduxのstoreは、Reactとは別の場所にあるので、
 * Componentとstoreを繋げる必要があり、そのためにconnect関数を使います
 * */
export default connect(mapStateToProps, mapDispatchToProps)(App)
