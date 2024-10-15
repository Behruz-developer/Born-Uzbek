import React from 'react'
import digital1 from '../../assets/images/digital-1.png'
import digital2 from '../../assets/images/digital-2.png'
import digital3 from '../../assets/images/digital-3.png'


const Digital = () => {
    return (
        <div className='digital'>
            <div className="digital_card">
                <img src={digital1} alt="" />
                <div className="digital_card_txt">
                    <p className="digital_text">&#123;digital capsule&#125; &#123;freelance&#125; &#123;remote work&#125;</p>
                    <p className="digital_subtitle">digital линейка</p>
                </div>
            </div>
            <div className='upcoming'>
                <div className="upcoming_card">
                    <img src={digital2} alt="" className='upcoming_card_img' />
                    <div className="upcoming_card_txt">
                        <p className="upcoming_text">&#123;it and tech moments capsule&#125;</p>
                        <p className="upcoming_subtitle">it &#123;айти&#125; линейка</p>
                    </div>
                </div>
                <div className="upcoming_card">
                    <img src={digital3} alt="" className='upcoming_card_img' />
                    <div className="upcoming_card_txt">
                        <p className="upcoming_text black1">&#123;basic&#125; &#123;comfort&#125; &#123;colors &#125;</p>
                        <p className="upcoming_subtitle black1">базовая линейка</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Digital
