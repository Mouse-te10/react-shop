import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <button className='modal-button' onClick={() => this.props.onShowItem(this.props.item)}>Закрыть</button>
            <img
            src={"./images/" + this.props.item.img} /**путь до изображения начинается с папки public */
            onClick={() => this.props.onShowItem(this.props.item)}/>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <div 
            className='add-to-cart' 
            onClick={() => {this.props.onAdd(this.props.item)}} //добавить товар в корзину, onAdd передается с App.js
            >+</div> {/**this.props.item это текущий товар */}
        </div>
      </div>
    )
  }
}

export default ShowFullItem