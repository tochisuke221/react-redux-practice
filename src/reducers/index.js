// すべてのreducerをまとめる
import { combineReducers } from 'redux'
import events from './events'

console.log('reducer/index')
export default combineReducers({ events })
