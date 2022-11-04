import './styles.css';

import { ReactComponent as CartIcon } from '../../assets/svg/cart.svg';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg'
import React from 'react'

function Nav() {
    return (
        <div className='nav__container'>
            <div className='nav__left'>
                <div className='nav__left--item --active'>
                    <span className='nav__left--text --active'>Women</span>
                </div>
                <div className='nav__left--item'>
                    <span className='nav__left--text'>Men</span>
                </div>
                <div className='nav__left--item'>
                    <span className='nav__left--text'>Kids</span>
                </div>
            </div>
            <div className='nav__center'>
                <LogoIcon />
            </div>
            <div className='nav__right'>
                <div>
                    $
                </div>
                <div>
                    <CartIcon />
                </div>
            </div>
        </div>
    )
}

export default Nav