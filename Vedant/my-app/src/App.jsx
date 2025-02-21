import React from 'react'
import Header from './components/Header'
import Con from './components/Con'
import Spec from './components/Spec'
import Cou from './components/Cou'
import Career from './components/Career'
const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Header/>
      <Con/>
      <Spec/>
      <Cou/>
      <Career/>
    </div>
  )
}
export default App