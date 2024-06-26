import { useState } from 'react'
import './App.css'
import Checkbox from './components/checkbox'

function App() {
  const [password,setPassword] = useState({
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false
  });

  const [handleText,sethandleText] = useState("");

  const handleUppercase = () => {
    setPassword({
      ...password,
      uppercase: !password.uppercase,
    });
  }


  const handleLowercase = () => {
    setPassword({
      ...password,
      lowercase: !password.lowercase,
    });
  }

  const handleNumbers = () => {
    setPassword({
      ...password,
      numbers: !password.numbers,
    });
  }

  const handleSymbols = () => {
    setPassword({
      ...password,
      symbols: !password.symbols,
    });
  }

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
              <input type='number' className='num-box'value={handleText} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="word-criteria">
            <div>
              <label>Include Upper case</label>
            </div>
            <div>
              <Checkbox value={password.uppercase} onChange={handleUppercase} />
            </div>
          </div>
          <div className="word-criteria">
            <div>
              <label>Include Lower case</label>
            </div>
            <div>
              <Checkbox value={password.lowercase} onChange={handleLowercase}/>
            </div>
          </div>
          <div className="word-criteria">
            <div>
              <label>Include Numbers</label>
            </div>
            <div>
              <Checkbox value={password.numbers} onChange={handleNumbers}/>
            </div>
          </div>
          <div className="word-criteria">
            <div>
              <label>Include Symbol</label>
            </div>
            <div>
              <Checkbox value={password.symbols} onChange={handleSymbols}/>
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
