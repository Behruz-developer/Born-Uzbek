import React from 'react'
import logo from '../../assets/images/logo.svg'
import telegram from '../../assets/images/telegram.svg'
import wk from '../../assets/images/wk.svg'
import whatsapp from '../../assets/images/whatsapp.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer_box">
                    <div className="footer_card asd">
                        <img className='footer_logo' src={logo} alt="" />
                        <p className="footer_text">Мы онлайн</p>
                        <div className="footer_social">
                            <img src={telegram} alt="" />
                            <img src={wk} alt="" />
                            <img src={whatsapp} alt="" />
                        </div>
                        <p className="footer_address">ИП Шумилов Денис Игоревич, <br />
                            ИНН 524 600 732 754 <br />
                            ОГРНИП: 321 527 500 080 952</p>
                    </div>
                    <div className="footer_card">
                        <p className="footer_link">КЛИЕНТАМ</p>
                        <ul className="footer_list">
                            <li><a href="#!" className="footer_link">Размерная сетка</a></li>
                            <li><a href="#!" className="footer_link">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="footer_card">
                        <p className="footer_link">НАШИ СОЦСЕТИ</p>
                        <ul className="footer_list">
                            <li><a href="#!" className="footer_link">ВКонтакте</a></li>
                            <li><a href="#!" className="footer_link">Телеграм</a></li>
                            <li><a href="#!" className="footer_link">Отзывы</a></li>
                        </ul>
                    </div>
                    <div className="footer_card">
                        <p className="footer_link"> ПОДПИСАТЬСЯ НА РАССЫЛКУ</p>
                        <div className="footer_form">
                            <input type="text" className='footer_input' placeholder='EMAIL' />
                            <button className='footer_btn' >Подписаться</button>
                        </div>
                        <p className="footer_text2">
                            Подписываясь, вы соглашаетесь на обработку данных <br />
                            в соответствии <a href="#!">с политикой конфиденциальности</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
