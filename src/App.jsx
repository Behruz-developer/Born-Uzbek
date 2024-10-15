import React from 'react'
import Nav from './Components/Nav/Nav'
import Upcoming from './Components/Upcoming/Upcoming'
import Products from './Components/Products/Products'
import Digital from './Components/Digital/Digital'
import Slide from './Components/Slide/Slide'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Upcoming />
      <h2 className='text'>not just a phrase — не просто фраза на худи, <br />
        мы делаем продукт на стыке актуальной fashion <br />
        истории и ежедневных моментов, которые <br />
        заставляют нас улыбаться даже тогда, когда это <br />
        бывает не так просто
      </h2>
      <Products /> 
      <Digital />
      <h2 className='text'>Создаем диджитал комьюнити <br />
        совершенно разных людей по всему <br /> 
        Миру с 2021 года. Свои первые <br /> заказы <br /> 
        мы начали отправлять в 2018 году, <br />
        а сейчас с нами уже более 20 тысяч <br />
        клиентов.
      </h2>
      <Slide/>
      <Footer/>
    </div>
  )
}

export default App