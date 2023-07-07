// 引数として、stateオブジェクト(変化前の状態) と actionオブジェクト を受け取ります。
// 戻り値として、 stateオブジェクト(変化後の状態) を返します。

import { READ_EVENTS } from '../actions'


export default (state = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return state
    default:
      return state
  }
}
