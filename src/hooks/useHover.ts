import { useEffect, useRef, useState } from 'react'

/**
 *
 * @returns {Array} ref-ref对象,value:是否高亮
 */
export function useHover<T extends HTMLElement>(): [
  React.RefObject<T>,
  boolean,
] {
  const [value, setValue] = useState(false)
  const ref = useRef<T>(null)
  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)
  useEffect(
    () => {
      const node: typeof ref.current = ref.current
      if (node) {
        node.addEventListener('mouseenter', handleMouseOver)
        node.addEventListener('mouseleave', handleMouseOut)
        return () => {
          node.removeEventListener('mouseenter', handleMouseOver)
          node.removeEventListener('mouseleave', handleMouseOut)
        }
      }
    },
    [ref.current], // Recall only if ref changes
  )
  return [ref, value]
}
