import React from 'react'
import Header from './Header'
import Con from './components/Con'
import Spec from './components/Spec'
import Cou from './components/Cou'
import Career from './Career'
import About from './About'
import Footer from './Footer'
const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Header/>
      <Con/>
      <Spec/>
      <Cou/>
      <Career/>
      <About/>
      <Footer/>
    </div>
  )
}
export default App