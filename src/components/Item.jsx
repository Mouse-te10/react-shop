import React, { Component } from 'react'

export class Item extends Component {
  constructor(props) {
    super(props)
        
      }
  render() {
    return (
      <div className='item'>
        <img
        src={"./images/" + this.props.item.img} /**путь до изображения начинается с папки public */
        onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div 
        className='add-to-cart' 
        onClick={() => {this.hangleClick()}} //добавить товар в корзину
        >+</div> {/**this.props.item это текущий товар */}
      </div>
    )
  }

  hangleClick() {
    this.props.onAdd(this.props.item)
    this.props.onCounter(this.props.item)
  }
}

export default Item