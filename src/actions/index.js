// 戻り値として actionオブジェクト(ユーザが行った操作を表現) を返す関数を定義します。

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})
