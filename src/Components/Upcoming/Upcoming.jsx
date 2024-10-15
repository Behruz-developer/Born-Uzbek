import React from 'react'
import img1 from '../../assets/images/upcoming-1.png'
import img2 from '../../assets/images/upcoming-2.png'

const Upcoming = () => {
  return (
    <div className='upcoming'>
      <div className="upcoming_card">
        <img src={img1} alt="" className='upcoming_card_img' />
        <div className="upcoming_card_txt">
          <p className="upcoming_text">&#123;new&#125;</p>
          <p className="upcoming_subtitle">sales & marketing</p>
        </div>
      </div>
      <div className="upcoming_card">
        <img src={img2} alt="" className='upcoming_card_img' />
        <div className="upcoming_card_txt">
          <p className="upcoming_text black1">&#123; нанесите свою надпись &#125;</p>
          <p className="upcoming_subtitle black1">make your phrase</p>
        </div>
      </div>
    </div>
  )
}

export default Upcoming
