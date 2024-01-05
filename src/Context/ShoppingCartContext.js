import {createContext, useContext, useState} from 'react'

const ShoppingCartContext = createContext({})


const ShoppingCartProvider = ({children}) => {
    const [cartItems,setCartItems] = useState([])
  return (
   <ShoppingCartContext.Provider value={{cartItems}}>
    {children}
   </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}
