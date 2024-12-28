import { useState } from 'react'
import Header from './components/Home'
import Hero from './components/Hero'
import Marquee from './components/Marque'
import Page from './components/Page'
import About from './components/About'
import Contact from './components/Contact'
import SignUpForm from './components/Signup'
import SignInForm from './components/Signin'
import ReservationForm from './components/Reservation'
//import AuthPage from './auth/page'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
    // <div className="relative flex min-h-screen flex-col">
    //   <Header />
    //   <main className="flex-1">
    //     <Hero />
    //     <Marquee/>
    //     <Page/>
    //     <ReservationForm/>
    //     <About/>
    //     <Contact/>
       
    //     <AuthPage/>
    //   </main>

    // </div>
    <>
    <Router>
      <Header/>
      
        <Routes>
          <Route path="/" element={<><Hero /><Marquee /><Page/></>} />
          
          
          {/*<Route path="/auth" element={<AuthPage/>} />*/}
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Reservation" element={<ReservationForm/>} />
          <Route exact path="/Page" element={<Page/>} />

        </Routes>
        
      </Router>
    
    </>
  )
}

export default App

