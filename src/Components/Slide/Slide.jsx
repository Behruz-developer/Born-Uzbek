import React from 'react'
import slide1 from '../../assets/images/slide1.png'
import slide2 from '../../assets/images/slide2.png'
import slide3 from '../../assets/images/slide3.png'
import slide4 from '../../assets/images/slide4.png'
import slide5 from '../../assets/images/slide5.png'
import slide6 from '../../assets/images/slide6.png'

const Slide = () => {
    return (
        <div className='slide'>
            <div className="slide_box">
                <div className="slide_card">
                    <img src={slide1} alt="" />
                </div>
                <div className="slide_card">
                    <img src={slide2} alt="" />
                </div>
                <div className="slide_card">
                    <img src={slide3} alt="" />
                </div>
                <div className="slide_card">
                    <img src={slide4} alt="" />
                </div>
                <div className="slide_card">
                    <img src={slide5} alt="" />
                </div>
                <div className="slide_card">
                    <img src={slide6} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Slide
