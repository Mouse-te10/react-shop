import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'chairs',
                    name: 'Стулья'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                },
                {
                    key: 'sofa',
                    name: 'Диваны'
                },
                {
                    key: 'light',
                    name: 'Свет'
                },
            ],
            activeCategory: 'all'
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div
            key={el.key}
            onClick={() => {this.handleClick(el.key)}}
            className={el.key === this.state.activeCategory ? 'the-clicked' : ''}>
                {el.name}
            </div> //вывод кнопок для фильтрации
        ))}
      </div>
    )
  }
  handleClick(key) {
    this.setState({activeCategory: key})
    this.props.chooseCategory(key)
  }
}

export default Categories