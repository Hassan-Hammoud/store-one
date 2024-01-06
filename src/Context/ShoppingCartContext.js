import { createContext, useContext, useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen,setIsOpen] = useState(false);
  const cartQuantity = cartItems.reduce((quantity, item) =>(
    item.quantity + quantity
  ), 0 )
  const openCart = () => {
    setIsOpen(true)
  }

  const closeCart = () => {
    setIsOpen(false)
  }

  // Get The Quantity Of Item In The Cart
  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  // Add Item To Cart
  const increaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        // return [...currentItems, currentItems.item.quantity=1]
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // Delete Item From Cart
  const decreaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        // return [...currentItems, currentItems.item.quantity=1]
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // Remove Items From Cart
  const removeItemsFromCart = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemsFromCart,
        openCart,
        closeCart,
        cartQuantity
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
