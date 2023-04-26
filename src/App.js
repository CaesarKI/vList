import './App.css'
import { genData } from './utils/index'
import FixHeight from './components/fixHeight'
import PropHeight from './components/propHeight'
import {
  Route,
  Routes,
  Link
} from "react-router-dom";
import Fa from './components/fa';
const data = genData(50000)
const itemHeight = 50


const itemRender = (item) => {
  return (
    <div style={{
      boxSizing: 'border-box',
      height: '100%',
      lineHeight: '50px',
      textAlign: 'center',
      border: '1px solid black'
    }}>{item.value}</div>
  )
}

function App() {
  return (
    <>
      <div className='route'>
        <Link to='/fixHeight' className='li'><button>定高</button></Link>
        <Link to='/propHeight' className='li' ><button>不定高</button></Link>
      </div>
      <Routes path='/' redirect='/fixHeight'>
          <Route path='/fixHeight' element={<FixHeight data={data} itemHeight={itemHeight} itemRender={itemRender}/>}></Route>
          <Route path='/propHeight' element={<PropHeight data={data} itemHeight={itemHeight} itemRender={itemRender}/>}></Route>
          <Route path='/fa' element={<Fa data={data} itemHeight={itemHeight} itemRender={itemRender}/>}></Route>

      </Routes>
    </>
  )
}

export default App
