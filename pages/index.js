import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function Home(){
  return(
    <>
    <Header />
    <h1>Hello World</h1>
    <Main/>
    <Footer/>
    </>
  )
}

export default Home
