import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className="container-box">
          <h3>PASSWORD GENERATOR</h3>
          <div className="password-box">
            <input type='text' placeholder='' className='pass-box'/>
        
            <button className='copy-button'>Copy text</button>
          </div>
          <br />
          
          <div className="word-criteria">
            <div>
              <label>Password Length</label>
            </div>
            <div>
              <input type='number' className='num-box'/>
            </div>
          </div>
          <div className="word-criteria">
            <div>
              <label>Include Upper case</label>
            </div>
            <div>
              <input type='checkbox' className='check-box'></input>
            </div>
          </div>
          <div className="word-criteria">
            <div>
              <label>Include Lower case</label>
            </div>
            <div>
              <input type='checkbox' className='check-box'></input>
            </div>
          </div>
          <div className="word-criteria">
            <div>
              <label>Include Numbers</label>
            </div>
            <div>
              <input type='checkbox' className='check-box'></input>
            </div>
          </div>
          <div className="word-criteria">
            <div>
              <label>Include Symbol</label>
            </div>
            <div>
              <input type='checkbox' className='check-box'></input>
            </div>
          </div>
          <br />
          <button className='generate-button'>Generate Password</button>
        </div>
      </div>
    </>
  )
}

export default App
