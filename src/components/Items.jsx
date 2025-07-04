import React, { Component } from 'react'
import Item from './Item.jsx'

export class items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => ( //пропсы принимаются автоматически, это массив товаров
          <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} onCounter={this.props.onCounter}/>
        ))}
      </main>
    )
  }
}

export default items