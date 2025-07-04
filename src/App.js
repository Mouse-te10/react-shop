import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items, { items } from './components/Items'
import Categories from './components/Categories'
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) { //переписать на useState
    super(props)
    this.state = {
      orders: [
         //товары находящиеся в корзине     
      ],
      currentItems: [
        //фильтрованные товары
      ],
      items: [ //все товары в магазине
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpeg',
          desc: 'Lorem inpum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price: '49.99',
          count: 0,
        },
        {
          id: 2,
          title: 'Стол',
          img: 'Table.jpeg',
          desc: 'Lorem inpum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price: '149.99',
          count: 0,
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem inpum dolor sit amet, consectetur adipisicing',
          category: 'sofa',
          price: '549.99',
          count: 0,
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'wall-light.jpeg',
          desc: 'Lorem inpum dolor sit amet, consectetur adipisicing',
          category: 'light',
          price: '24.99',
          count: 0,
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'chair-white.jpeg',
          desc: 'Lorem inpum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price: '49.99',
          count: 0,
        },
      ],
      ShowFullItem: false,
      fullItem: {}, //товар который нужно отобразить
      showNewStyleOnCategory: false,
    }
    this.state.currentItems = this.state.items

    this.addToOrder = this.addToOrder.bind(this) //в методе addToOrder я смогу взаимодействовать с состояниями
    this.deleteOrder = this.deleteOrder.bind(this) //тоже самое
    this.chooseCategory = this.chooseCategory.bind(this)//тоже самое
    this.onShowItem = this.onShowItem.bind(this)//тоже самое
    this.onCounter = this.onCounter.bind(this)
    this.onCounterDelete = this.onCounterDelete.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} onCounter={this.state.counter} items={this.state.orders} onCounterDelete={this.onCounterDelete} />
        <Categories chooseCategory={this.chooseCategory} onClass={this.state.showNewStyleOnCategory ? 'the-clicked' : ''}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} onCounter={this.onCounter}/> {/**передача массива товаров и функции добавления в корзину */}
        {this.state.ShowFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onCounter(item) {
    this.setState(prevState => {
      const newItems = prevState.orders.map(el => {
        if (el.id === item.id) {
          console.log({ ...el, count: (el.count || 0) + 1 })
          return { ...el, count: (el.count || 0) + 1 }
        }
        return el
      })
      return { orders: newItems }
    })
  }

  onCounterDelete(item) {
    this.setState(prevState => {
      const newItems = prevState.orders.map(el => {
        if (el.id === item.id) {
          console.log({ ...el, count: (el.count || 0) - 1 })
          return { ...el, count: (el.count || 0) - 1 }
        }
        return el
      })
      return { orders: newItems }
    })
  }

  onClickCategory() {
    return this.setState({showNewStyleOnCategory: !this.state.showNewStyleOnCategory})
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items}) //выводим все товары если категория all
      this.onClickCategory()
      return //останавливаем тк смысла нет дальше
    }
    this.onClickCategory()
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category) //сама фильтрация
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }


  addToOrder(item) {
    let isInArray = false

    this.state.orders.forEach(el => { //цикл для проверки на существование товара с таким же id
      if(el.id === item.id) {
        isInArray = true
      }
    })
    if(!isInArray) {
      this.setState({orders: [...this.state.orders, item]}) //setState - изменяет состояние, добавляет в корзину товар: item
    } 
  }
}

export default App;
