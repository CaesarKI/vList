export function genData (amount = 2000) {
  const data = []
  for (let i = 0; i < amount; i++) {
    const num=Math.floor(Math.random()*100)
    data.push({
      id: Math.random().toString(36).substr(2),
      index: i,
      value: '列表'+(i+ 1),
      height:num<=50?50:num
    })
  }
  return data
}



export const findItem=(data,scrollTop)=>{
  const offsetList=data.map(item=>item.offset)||[]
  const index=offsetList.findIndex(item=>item>=scrollTop)
  return index
}