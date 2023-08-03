import './App.css'
import { useState } from 'react'
import GamePage from './component/GamePage'
import LoginPage from './component/LoginPage'
function App() {
  const [isLoginPage, setLoginPage] = useState(true)
  const [name, setName] = useState({
    player1:"",
    player2:"",
  })
  function clickHandler() {
    setLoginPage(preState => {
      return !preState
    })
  }
  function handleChange(event) {
    const {name, value} = event.target
    setName(prevState =>{
      return{
        ...prevState,
        [name]: value,
      }
    })
  }
  console.log(name)
  return(
    <div>
      {isLoginPage && <LoginPage 
                       onClick={clickHandler}
                       name1='player1'
                       name2='player2'
                       onChange={handleChange} />}
      {!isLoginPage && <GamePage 
                       onClick={clickHandler}
                       p1={name.player1}
                       p2={name.player2} />}
    </div>
  )
}

export default App
