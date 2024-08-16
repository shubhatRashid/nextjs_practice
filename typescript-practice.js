const pizzas = [
    {name:'pizza1',price:10},
    {name:'pizza1',price:11},
    {name:'pizza2',price:15},
    {name:'pizza3',price:18},
    {name:'pizza4',price:1}
  ]
  
  let cashregister = 100
  let orders = []
  
const addNewPizza = (newPizza) => {
    pizzas.push(newPizza)
  }
  
const placeOrder = (pizzaName) => {
    foundPizza = pizzas.filter((pizza)=> 
      pizzaName === pizza.name
    )
    foundPizza = foundPizza[0]

    cashregister += foundPizza.price
    orders.push({id : pizzaName[pizzaName.length-1],pizza:foundPizza,status:'ordered'})
    return foundPizza
  }
  
const completeOrder = (id) => {
  orders = orders.map(order => {
    if (order.id == id){
      order.status = 'completed'
    }
    return order
  })
}

placeOrder('pizza3')
placeOrder('pizza2')
console.log(orders)
completeOrder('2')
console.log(orders)
