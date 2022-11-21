import './styles.css';

import React, { useCallback, useEffect, useState } from 'react'
import { closeCart, openCart } from '../../redux/cart/cartSlice';
import { setCurrencyList, setSelectedCurrency } from '../../redux/currency/currencySlice';
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as CartIcon } from '../../assets/svg/cart.svg';
import DropdownHead from '../dropdown/dropdown';
import DropdownItem from '../dropdown/dropdownItem';
import { LOAD_CURRENCIES } from '../../services/queries';
// import { LOAD_CURRENCIES } from '../services/queries';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg'
import { useQuery } from '@apollo/client'

function Nav() {
    const dispatch = useDispatch()
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
    const currencyList = useSelector((state) => state.currency.currencyList);
    const currentCurrency = useSelector((state) => state.currency.currentCurrency);
    const { error, loading, data } = useQuery(LOAD_CURRENCIES)
    // const [isCartOpen, setIsCartOpen] = useState(true);
    // const [currencyList, setCurrencyList] = useState([]);
    // const [currentCurrency, setSelectedCurrency] = useState({
    //     label: "USD",
    //     symbol: "$"
    // });

    useEffect(() => {
        if (data && data.currencies) {
            dispatch(
                setCurrencyList(data.currencies)
            )
        }
    }, [data, dispatch])

    const handleToggleCart = useCallback(
        () => {
            if (isCartOpen) {
                return dispatch(closeCart())
            }
            dispatch(openCart())
        },
        [dispatch, isCartOpen],
    )

    const handleSelectCurrency = useCallback(
        (_currency) => {
            dispatch(
                setSelectedCurrency({
                    label: _currency.label,
                    symbol: _currency.symbol
                })
            )
        },
        [dispatch],
    )
    // console.log(currencyList)
    return (
        <div className={`nav__container`}>
            {/* <div className={`nav__container ${isCartOpen ? "--fullScreen" : ""}`}> */}
            <div className='nav__left'>
                <div className='nav__left--item --active'>
                    <span className='nav__left--text --active'>All</span>
                </div>
                <div className='nav__left--item'>
                    <span className='nav__left--text'>Clothes</span>
                </div>
                <div className='nav__left--item'>
                    <span className='nav__left--text'>Tech</span>
                </div>
            </div>
            <div className='nav__center'>
                <LogoIcon />
            </div>
            <div className='nav__right'>
                <div className='dropdown'>
                    <DropdownHead
                        value={<span>{currentCurrency && currentCurrency.symbol}</span>}
                    >
                        {currentCurrency && currencyList && currencyList.length > 0 && currencyList.map(_currency => (
                            <DropdownItem active={currentCurrency.symbol === _currency.symbol} onClick={() => handleSelectCurrency(_currency)} >
                                {_currency.symbol}
                                <span className={`nav__dropdown --item ${_currency.label === "AUD" ? "--extraSpace" : ""} `}>
                                    {_currency.label}
                                </span>
                            </DropdownItem>
                        ))}
                    </DropdownHead>
                </div>
                <div className='cart-icon badge' data-badge={2} onClick={handleToggleCart} >
                    <CartIcon />
                </div>
            </div>
            {/* {
                isCartOpen &&
                <Cart />
            } */}
        </div>
    )
}

export default Nav