// 戻り値として actionオブジェクト(ユーザが行った操作を表現) を返す関数を定義します。
import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${QUERYSTRING}`)
  console.log(response)
  dispatch({type: READ_EVENTS, response})
}
