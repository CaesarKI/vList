import React,{useState,useCallback,useRef} from 'react'
import useFixedHeightVirtualList from '../hooks/fixHeightHook'
import '../App.css'

export default function FixHeight({data,itemHeight,itemRender}) {
  const [scrollTop, setScrollTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const { totalHeight, visibleData, offset } = useFixedHeightVirtualList({
    data,
    itemHeight,
    scrollTop,
    clientHeight,
  })

  const containerRef = useRef(null)

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop)
    }
  }, [])


  const containerRefCallback = useCallback((node) => {
    if (node) {
      containerRef.current = node
      setClientHeight(node.clientHeight)
    } else {
      containerRef.current = null
    }
  }, [])

  return (
    <div
    className="container"
    ref={containerRefCallback}
    onScroll={handleScroll}
  >
    <div
      className="total-list"
      style={{ height: `${totalHeight}px` }}
    ></div>
    <div
      className="visible-list"
      style={{ transform: `translateY(${offset}px)` }}
    >
      {visibleData.map((data) => (
        <div key={data.id} style={{ height: `${itemHeight}px` }}>{itemRender(data)}</div>
      ))}
    </div>
  </div>
  )
}
