var cart = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newObject = {itemName: item, itemPrice: getRandomInt(1, 101)}
  cart.push(newObject)
  return `${item} has been added to your cart.`
}

function viewCart() {
  let text = 'In your cart, you have'
  let lastObject = cart.slice(-1)
  if (cart.length < 1) {
  return 'Your shopping cart is empty.'  
  } else if (cart.length === 1) {
    return `${text} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    let lastPartOfSent = ` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    for (let i = 0; i < (cart.length - 1); i++) {
    text = `${text} ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    let finalSentence = text + lastPartOfSent
    return finalSentence
  }
}

function total() {
  let totalPrice = 0
  for (let i = 0; i < (cart.length); i++){
    totalPrice = totalPrice + cart[i].itemPrice
  }
  return totalPrice
}

// function removeFromCart(item) {
//   let index = cart.indexOf(item)
//   if (index && (cart[index].itemName === item)) {
//     cart.splice(index, 1)
//   } else {
//     return 'The item is not in your cart.'
//     }
// }
function removeFromCart(item) {
  let searchResult
  
  for (let i=0; i<cart.length; i++) {
    if (cart[i].itemName === item) {
      searchResult = cart[i]
    }
  }
  
  let index = cart.indexOf(searchResult)
  
  if (index) {
    cart.splice(index, 1)
    return cart
  } else {
    return 'That item is not in your cart.'
  }
  //return 'That item is not in your cart.'
  
  
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
   
    cart = []
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
}
