import { memo, FC } from 'react'
import { useCounter } from '@/hooks'
const Test: FC = () => {
  const { count, increment } = useCounter(1)
  return (
    <div className="">
      <div>{count}</div>
      <button onClick={increment}>+</button>
    </div>
  )
}
export default memo(Test)
