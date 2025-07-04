import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./images/" + this.props.item.img} /> {/**путь до изображения начинается с папки public */}
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
        <FaTrash className='delete-icon' onClick={() => this.onDelete()}/> {/**функция удаления с компонента App.js */}
        <p>{this.props.items.find(el => el.id === this.props.item.id).count}</p>
      </div>
    )
  }

  onDelete() {
    if(this.props.item.count === 1) {
      this.props.onDelete(this.props.item.id)
    }
    else if(this.props.item.count > 1) {
      this.props.onCounterDelete(this.props.item)
    }
  }
}

export default Order