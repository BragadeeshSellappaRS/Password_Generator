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
  const [copied, setCopied] = useState(false);

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

  const setPasswordLength = (val) => {
    setPassword({
      ...password,
      length: val,
    });
  }

  function copy(){
    if(handleText.length > 0){
      navigator.clipboard.writeText(handleText);
      setCopied(true);
      setInterval(()=>{
        setCopied(false);
      },2000);
    }
  }

  function generatePassword(){
    const numArray = [0,1,2,3,4,5,6,7,8,9];
    const symArray = ["!","@","#","$","%","^","&","*","(",")","-","_",".",","];
    const charArray =  Array.from(Array(26)).map((_e, i) => i+97);
    const lowerCaseLetters = charArray.map(letter => String.fromCharCode(letter));
    const upperCaseLetters = charArray.map(letter => letter.toUpperCase);

    const {length, uppercase, lowercase, numbers, symbols} = password; 

    const generateWord = (length, uppercase, lowercase, numbers, symbols) => {
      const avaliable = [ 
        ...(uppercase ? upperCaseLetters: []),
        ...(lowercase ? lowerCaseLetters: []),
        ...(numbers ? numArray: []),
        ...(symbols ? symArray: [])
      ];

      const shuffleArray = (array) => array.sort(()=>Math.random()-0.5);
      const characters = shuffleArray(avaliable).slice(0,length);
      sethandleText(characters.join(' '));
      return characters;  
    }

    generateWord(length, uppercase, lowercase, numbers, symbols);
  }
  return (
    <>
      <div className='container'>
        <div className="container-box">
          <h3>PASSWORD GENERATOR</h3>
          <div className="password-box">
            <input type='text' className='pass-box' value={handleText} onChange={(e)=>sethandleText(e.target.value)}/>
            <button className='copy-button' onClick={copy}>{copied ? 'Copied':'Copy Text'}</button>
          </div>
          <br />
          <div className="word-criteria">
            <div>
              <label>Password Length</label>
            </div>
            <div>
              <input type='number' className='num-box'value={password.length} onChange={(e)=>setPasswordLength(e.target.value)}/>
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
          <button className='generate-button' onClick={generatePassword}>Generate Password</button>
        </div>
      </div>
    </>
  )
}

export default App
