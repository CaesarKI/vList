import { useMemo, useState } from 'react'
import { findItem } from '../utils/index'

export default function usePropHeightVirtualList(props) {
  const { data, itemHeight, scrollTop, refs } = props
  const [position, setPosition] = useState(
    useMemo(() => {
      const initPosition = []
      data.forEach((item, index) => {
        initPosition[index] = {
          ...item,
          minHeight: itemHeight,
          offset: itemHeight + (initPosition[index - 1]?.offset || 0),
        }
      })
      return initPosition
    }, [data, itemHeight])
  )
  const totalHeight = position[position.length - 1]?.offset || 0
  const startIndex = findItem(
    position.slice(0, Math.ceil(scrollTop / itemHeight) + 1),
    scrollTop
  )
  const endIndex =startIndex+10
  const vList = position.slice(startIndex, endIndex)
  const offset = position[startIndex-1]?.offset || 0

  const updatePosttion = () => {
    const current = refs.current
    current.forEach((node, index) => {
      const i = index + startIndex
      const clientHeight = node.clientHeight
      position[i] = { ...position[i], minHeight: clientHeight }
    })
    const newPosition=[]
    position.forEach((item, index) => {
      newPosition[index]={
        ...item,
        offset: item.minHeight + (newPosition[index - 1]?.offset || 0),
      }
    })
    console.log(newPosition, 'posi')
    setPosition(newPosition)
  }

  return {
    totalHeight,
    vList,
    offset,
    updatePosttion,
  }
}
