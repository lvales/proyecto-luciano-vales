import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  }

  const removeItem = (itemId) => {
    const products = cart.filter((item) => item.id !== itemId);
    setCart(products);
  }

  const clear = () => {
    setCart([]);
  }

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;