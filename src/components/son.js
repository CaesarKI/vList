
import React, { useEffect, useState } from 'react'

export default function useSon() {
  const [num,setNum]=useState(0)

  useEffect(()=>{
    setNum(1)
  },[])
  return {
    num
  }
}
