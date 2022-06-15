import React,{useState} from 'react'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'



function CookieStandAdmin() {
    const [rows, setrows] = useState([])
    let updaterow=(data)=>{
         
      setrows([...rows,data])
    }
  return (
    <div>
        
        <Header/>
        <Main data ={rows} updaterow={updaterow}/>
        <br></br>
        <br></br>
        <Footer/>
    </div>
  )
}

export default CookieStandAdmin