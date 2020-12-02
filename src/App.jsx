import React, { Component } from 'react'
import axios from 'axios'
import Customers from './Customers'
import Products from './Products'
import Payments from './Payments'
import Orders from './Orders'

class App extends Component {
  state = {
    customers: {
      name: 'customers',
      url: 'http://localhost:8081/customers',
      data: []
    },
    products: {
      name: 'products',
      url: 'http://localhost:8082/products',
      data: []
    },
    orders: {
      name: 'orders',
      url: 'http://localhost:8083/orders',
      data: []
    },
    payments: {
      name: 'payments',
      url: 'http://localhost:8084/payments',
      data: []
    }
  }
  getRecords = (collection) => {
    axios.get(collection.url).then(response => {
      let col = this.state[collection.name]
      col.data = response.data
      this.setState({ col })
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={ () => this.getRecords(this.state.customers) }>Customers</button>
        <button onClick={ () => this.getRecords(this.state.products) }>Products</button>
        <button onClick={ () => this.getRecords(this.state.payments) }>Payments</button>
        <button onClick={ () => this.getRecords(this.state.orders) }>Orders</button>
        <Customers data={ this.state.customers.data }/>
        <Products data={ this.state.customers.data }/>
        <Payments data={ this.state.customers.data }/>
        <Orders data={ this.state.customers.data }/>
      </div>
    )
  }
}

export default App
