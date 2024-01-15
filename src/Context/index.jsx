import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    
    //Shopping Cart - Increment Quantity
    const [count, setCount] = useState(0)

    //Product Detail - Open / Close
    const [isProductDetailOpen, SetIsProductDetailOpen] = useState(false)
    const openProductDetail = () => SetIsProductDetailOpen(true)
    const closeProductDetail = () => SetIsProductDetailOpen(false)

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
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}