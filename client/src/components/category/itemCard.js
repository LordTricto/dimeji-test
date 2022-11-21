import './styles.css';

import React, { useCallback, useEffect, useState } from 'react'

import { ReactComponent as CartHoverIcon } from '../../assets/svg/itemCart.svg'
import ImageTest from "../../assets/images/Product.png";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ItemCard({ data, isDisabled = false }) {
    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate()

    const currentCurrency = useSelector((state) => state.currency.currentCurrency);

    const [dataCurrency, setDataCurrency] = useState(null);

    useEffect(() => {
        if (data && data.prices) {
            setDataCurrency(
                data.prices.find(_price => _price.currency?.label === currentCurrency?.label)
            )
            console.log(data.prices,
                currentCurrency?.label
            );
        }
    }, [data, currentCurrency])


    const handleSelectItem = useCallback(
        () => {
            // navigate("/individual")
        },
        [
            // navigate
        ],
    )

    return (
        <>
            {data &&
                <div className={`item__container ${isHover && !isDisabled ? "--hover" : ""} ${isDisabled ? "--disabled" : ""} `}
                    onClick={handleSelectItem}
                    onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <div className='item__img'>
                        <img src={data.gallery[0]} alt="hhh" />
                        {isDisabled &&
                            <div className="item__img--disabled">
                                <span>
                                    OUT OF STOCK
                                </span>
                            </div>
                        }
                    </div>
                    <div className='item__texts'>
                        <div className={`item__cart ${isHover && !isDisabled ? "--hover" : ""}`}>
                            <CartHoverIcon />
                        </div>
                        <p className='item__name'>{data.name}</p>
                        <span className='item__price'>
                            {dataCurrency && dataCurrency.currency?.symbol}
                            {dataCurrency && dataCurrency.amount}
                        </span>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemCard