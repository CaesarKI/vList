import {useMemo} from 'react'

export default function useFixedHeightVirtualList(props) {
  const {data,scrollTop,clientHeight,itemHeight}=props
  const totalHeight = useMemo(() => data.length * itemHeight, [data.length, itemHeight])
  const startIndex = Math.floor(scrollTop / itemHeight)
  const endIndex = Math.ceil(clientHeight / itemHeight) + startIndex + 1
  const visibleData = useMemo(() => data.slice(startIndex, endIndex), [data, endIndex, startIndex])
  // translateY
  const offset = useMemo(() => startIndex * itemHeight, [itemHeight, startIndex])
  return {
    totalHeight,
    visibleData,
    offset,
  }
}
