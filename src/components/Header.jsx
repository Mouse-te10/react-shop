import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'

const showOrders = (props) => {
  let summa = props.orders.reduce((acc, item) => { //сумма вцен всех товаров
    acc += +item.price * +item.count
    console.log(item.count)
    return acc
  }, 0)

  return (
    <div>
      {props.orders.map(el => ( //вывод товаров в корзине
        <Order key={el.id} item={el} onDelete={props.onDelete} items={props.items} onCounterDelete={props.onCounterDelete} />
      ))}
      <p className='summa'>Сумма: {summa.toFixed(2)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Корзина пуста</h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false) // корзина открыта или закрыта

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(prev => !prev)} className={`shop-cart-button ${cartOpen && 'active'}`} />
            {/**иконка корзины, при нажатии меняется стейт и открывается shop-cart */}
            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? 
                    showOrders(props) : showNothing()} {/**проверка на пустую корзину */}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
