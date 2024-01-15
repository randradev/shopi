import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    
    //Shopping Cart - Increment Quantity
    const [count, setCount] = useState(0)

    //Shopping Cart - Add products to cart
    const[cartProducts, setCartProducts] = useState([])

    //Product Detail - Open / Close
    const [isProductDetailOpen, SetIsProductDetailOpen] = useState(false)
    const openProductDetail = () => SetIsProductDetailOpen(true)
    const closeProductDetail = () => SetIsProductDetailOpen(false)

    //Checkout Side Menu
    const [isCheckoutSideMenuOpen, SetIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => SetIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => SetIsCheckoutSideMenuOpen(false)

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({})
    
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}