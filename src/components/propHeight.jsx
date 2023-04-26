import React, { useCallback, useEffect, useRef, useState } from 'react'
import usePropHeightVirtualList from '../hooks/propHeightHook'

export default function PropHeight ({ data, itemHeight, itemRender }) {
  const refs = useRef([])
  const containRef = useRef(null)
  const [scrollTop, setScrollTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const { vList = [], updatePosttion, totalHeight, offset } = usePropHeightVirtualList({ scrollTop, data, itemHeight, refs, clientHeight })


  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop)
  }, [])

  useEffect(() => {
    if (refs.current.filter(Boolean).length === vList.length) {
      console.log('更新数据结构');
      updatePosttion()
    }
  }, [scrollTop])

  useEffect(()=>{
    if(containRef.current){
      setClientHeight(containRef.current.clientHeight)
    }
  },[])


  return (
    <div className='container' onScroll={handleScroll} ref={containRef}>
      <div className='total-list' style={{ height: totalHeight }}></div>
      <div className='list-item'
        style={{ transform: `translateY(${offset}px)` }}
      >
        {vList.map((item, index) => {
          return (
            <div
              style={{height:item.height}}
              key={item.id}
              ref={(node) => {
                refs.current[index] = node
              }}
            >{itemRender(item)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
