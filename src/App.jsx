import { useEffect, useState } from 'react'
import './App.css'
import Navber from './Component/Header/Navber'
import PlayerSection from './Component/Player/PlayerSection'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toggole from './Component/Toggole/Toggole'
import Select from './Component/Player/Select'
import Footer from './Component/Footer/Footer'

function App() {
  const [credit,setCredit]=useState(0)
  const [addPlayer,setAddPlayer]=useState([])
  const [button,setButton]=useState({status:'available'})

  const creditHandle=()=>{
      setCredit(credit+80000)
      toast.success('SuccessFully Wallet Add 80000 Coin',{
        position:'top-center',
        
      
      })
  }

  const ChoosePlayerHandler=(price,player)=>{

    const addCheck=addPlayer.find(p=>p.playerId===player.playerId)
    if (addPlayer.length<6) {
      if (addCheck) {
        toast.error(`${player.name} already Added`,{
          position:'top-center',
          autoClose:3000,
        })
      }
      else{
      
      if (credit>=price) {
        const newAdd=[...addPlayer,player]
        setAddPlayer(newAdd)
        
      
      
        setCredit(credit-price)
        toast.success(`${player.name}  chosen successfully! `,{
        position:'top-center',
        autoClose: 3000,
        })
      }
      else{
        toast.error("You Don't  Have Money!",{
          position:"top-center",
          autoClose:3000,
        })
      }
  
      }
    }else{
      toast.error('Sorry Maximum 6 Player Already Add',{
        position:'top-center',
        autoClose:3000,
      })
    }    
  }

  const moneyBack=(price)=>{
    
    setCredit(credit+price)
    
  }

  const buttonHandle=(status)=>{
    
    if (status==='available') {
      setButton({status:'available'})
    }
    else{
      setButton({status:'selected'})
    }

  }

  const deletePlayerHandle=(id,player)=>{
    
    
    const delatePlayer=addPlayer.filter(player=>player.playerId!==id)
    setAddPlayer(delatePlayer)
    toast.success(`Successfully ${player.name} delate`,{
      position:'top-center',
      autoClose:3000,
    })
    
  }
  

    

  return (
    <>
    <ToastContainer></ToastContainer>

      <Navber creditHandle={creditHandle} credit={credit}></Navber>

      <Toggole button={button} buttonHandle={buttonHandle} addPlayer={addPlayer}></Toggole>

      {
        button.status==='available'?<PlayerSection 
        credit={credit}
        ChoosePlayerHandler={ChoosePlayerHandler}

        ></PlayerSection>:<Select moneyBack={moneyBack} addPlayer={addPlayer} deletePlayerHandle={deletePlayerHandle} buttonHandle={buttonHandle} ></Select>
      }

      <Footer></Footer>
    </>
  )
}

export default App
