import { useState } from 'react'
import './App.css'

const styles = {
  default: {
    toggle: 'fixed top-6 right-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors',
    button: 'bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
  },
  tailwind: {
    toggle: 'fixed top-6 right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200',
    button: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg transform hover:scale-105'
  }
}

export default function App() {
  const [count, setCount] = useState(0)
  const [isTailwind, setIsTailwind] = useState(false)
  
  const s = isTailwind ? styles.tailwind : styles.default
  
  return (
    <div className="page-container">
      <button 
        onClick={() => setIsTailwind(!isTailwind)} 
        className={s.toggle}
      >
        {isTailwind ? 'Disable' : 'Enable'} Tailwind
      </button>
      
      <div className={`card-container ${isTailwind ? 'card-tailwind' : ''}`}>
        <h1 className={`card-title ${isTailwind ? 'title-tailwind' : ''}`}>
          Technical Evaluation
        </h1>
        <button 
          onClick={() => setCount(count + 1)} 
          className={s.button}
        >
          count is {count}
        </button>
      </div>
    </div>
  )
}