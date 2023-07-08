// 引数として、stateオブジェクト(変化前の状態) と actionオブジェクト を受け取ります。
// 戻り値として、 stateオブジェクト(変化後の状態) を返します。

import { READ_EVENTS } from '../actions'
import _ from 'lodash'


export default (event = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return event
  }
}
