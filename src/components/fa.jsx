import React, { useEffect, useState } from 'react'
import useSon from './son'

export default function Fa() {

  console.log(222222222);
  const useSon=()=>{
    const [num,setNum]=useState(0)
    useEffect(()=>{
      setNum(1)
    },[])

    return {
      num
    }
  }

  useSon()

  return (
    <div>10000000</div>
  )
}
