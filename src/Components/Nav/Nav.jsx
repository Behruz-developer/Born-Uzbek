import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import { FaPhone } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
    const [active, setActive] = useState(false);
    return (
        <>
            <div className='nav'>
                <div className="container">
                    <div className="nav_box">
                        <a href="#!" className="nav_logo">
                            <img src={logo} alt="" />
                        </a>

                        <ul className={`nav_list ${active && "active"}`}>
                            <IoMdClose className='nav_close' onClick={() => setActive(false)} />
                            <li><a href="#!" className="nav_link">Продукти</a></li>
                            <li><a href="#!" className="nav_link">Новинки</a></li>
                            <li><a href="#!" className="nav_link">Контакты</a></li>
                        </ul>
                        <div className='nav_icon'>
                            <div className="lang">
                                <p className="lang_text">UZ</p>
                                <div className="lang_border"></div>
                                <p className="lang_text">RU</p>
                            </div>
                            <a href="#!">
                                <IoMenu className='nav_menu' onClick={() => setActive(true)} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="nav_bottom">Изготовление до 7-10 рабочих дней, ДЛЯ ТОВАРОВ ИЗ РАЗДЕЛА "В НАЛИЧИИ" 1-2 РАБОЧИХ ДНЯ 👀</p>
        </>

    )
}

export default Nav